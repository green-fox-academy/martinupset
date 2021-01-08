package com.example.day02.messaging;

import com.example.day02.model.WeatherReport;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@RabbitListener(queues = {"rabbitTest1", "rabbitTest2"})
public class MessageHandler {

    public static final Logger LOG = LoggerFactory.getLogger(MessageHandler.class);

    @Autowired
    private ObjectMapper objectMapper;

    @RabbitHandler
    public void onMessageReceived(WeatherReport message){
        LOG.info("Message received: {}", message.getTemperature());
    }

    @RabbitHandler
    public void onMessageReceived(String message){
        try {
            WeatherReport report = objectMapper.readValue(message, WeatherReport.class);
            LOG.info("Message received: {}", report.getTemperature());
        }catch (JsonProcessingException e){
            LOG.error("JSON error", e);
        }
    }
}
