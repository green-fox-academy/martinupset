package com.example.day02.controller;

import com.example.day02.model.WeatherReport;
import com.example.day02.reposity.MessagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @Autowired
    private MessagingService messagingService;

    @PostMapping("sendMessage")
    public void sendMessage(@RequestParam("message") WeatherReport message) {
        messagingService.sendMessage(message);
    }
}
