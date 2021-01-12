package com.example.project.controller;

import com.example.project.config.AppConfig;
import com.example.project.modal.Req;
import com.example.project.modal.Sensor;
import com.example.project.services.SensorService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
public class APIController {
    public static final Logger LOG = LoggerFactory.getLogger(APIController.class);

    private SensorService sensorService;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    private AtomicInteger counter = new AtomicInteger(0);

    @Autowired
    public APIController(SensorService sensorService) {
        this.sensorService = sensorService;
    }

    @PostMapping
    public Sensor generateSensor(@RequestBody Req reqObj){
        Sensor newSensor = sensorService.generateSensor(reqObj.getLat(),reqObj.getLon());
        return newSensor;
    }

    @Scheduled(fixedDelay = 1000)
    public void  sendRequest(){
        int temp = counter.incrementAndGet();
        if (temp < 5){
            double la = 200;
            double lo = 300;
            final String uri = "http://localhost:8080";
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            try {
                String jsonObj = objectMapper.writeValueAsString(new Req(la,lo));
                HttpEntity entity = new HttpEntity(jsonObj,headers);
                ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.POST, entity, String.class);
                String body = result.getBody();
                rabbitTemplate.convertAndSend(AppConfig.EXCHANGE_NAME, "sensor.haha",body);

                LOG.info("miao" + body);

            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }
    }

}
