package com.example.project.consumer;

import com.example.project.modal.Sensor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.websocket.MessageHandler;

@Component
@RabbitListener(queues = "boot_queue")
public class SensorListener {
    public static final Logger LOG = LoggerFactory.getLogger(MessageHandler.class);

    @Autowired
    private ObjectMapper objectMapper;

    @RabbitHandler
    public void onMessageReceived(String message){
        try {
            Sensor sensor = objectMapper.readValue(message, Sensor.class);
            LOG.info("JSON : {}" , sensor.getId());
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}
