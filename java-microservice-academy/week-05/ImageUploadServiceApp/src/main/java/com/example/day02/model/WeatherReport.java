package com.example.day02.model;

import java.io.Serializable;

public class WeatherReport implements Serializable {
    private int temperature;

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }
}
