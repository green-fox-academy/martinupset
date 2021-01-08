package com.example.day02.services;


import com.example.day02.model.WeatherReport;
import com.example.day02.reposity.MessagingService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicInteger;

@Service
public class MessagingServiceImp1 implements MessagingService {

    public static final Logger LOG = LoggerFactory.getLogger(MessagingServiceImp1.class);

    @Autowired
    private RabbitTemplate rebbitTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    private AtomicInteger counter = new AtomicInteger(0);

    @Override
    public void sendMessage(WeatherReport message) {
        try{
            String jsonWeatherReport = objectMapper.writeValueAsString(message);
            rebbitTemplate.convertAndSend("fan001", null, jsonWeatherReport);
            LOG.info("API-initiated message sent:" + message.getTemperature());
        } catch (JsonProcessingException e) {
             LOG.error("JSON error",e);
        }
    }

    @Scheduled(fixedDelay = 1000)
    public void sendScheduleMessage() {
        WeatherReport report = new WeatherReport();
        int temp = counter.incrementAndGet();
        report.setTemperature(temp);
        rebbitTemplate.convertAndSend("fan001",null,report);
        LOG.info("Scheduled message sent: " + report.getTemperature());
    }
}
