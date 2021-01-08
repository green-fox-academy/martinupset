package com.example.day02.reposity;

import com.example.day02.model.WeatherReport;

public interface MessagingService {
    void sendMessage(WeatherReport message);
}
