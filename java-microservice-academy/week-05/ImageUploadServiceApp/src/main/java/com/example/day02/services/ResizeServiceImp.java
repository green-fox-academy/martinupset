package com.example.day02.services;

import com.example.day02.configuration.RabbitConfig;
import com.example.day02.model.ImageUpload;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.AmqpException;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResizeServiceImp implements ResizeService{
    public static final Logger LOG = LoggerFactory.getLogger(ResizeServiceImp.class);
    private RabbitTemplate rabbitTemplate;
    private PhotoService photoService;

    @Override
    public void resize(ImageUpload message) {
        try{
            ImageUpload imageFile = photoService.getPhoto("1");
            rabbitTemplate.convertAndSend(RabbitConfig.QUEUE_NAME, "imageApp.haha",imageFile.getImage());

        } catch (AmqpException e) {
            e.printStackTrace();
        }
    }
}
