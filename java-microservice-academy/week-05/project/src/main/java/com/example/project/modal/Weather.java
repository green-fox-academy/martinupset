package com.example.project.modal;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDate;

public class Weather {
    private double temperature;
    private double windSpeed;
    private double humidity;
    @CreatedDate @DateTimeFormat(style = "yyyy-MM-dd") private LocalDate measurementTime;
    private String parentSensorId;

    public Weather(double temperature, double windSpeed, double humidity){
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.humidity = humidity;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public double getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(double windSpeed) {
        this.windSpeed = windSpeed;
    }

    public double getHumidity() {
        return humidity;
    }

    public void setHumidity(double humidity) {
        this.humidity = humidity;
    }

    public LocalDate getMeasurementTime() {
        return measurementTime;
    }

    public void setMeasurementTime(LocalDate measurementTime) {
        this.measurementTime = measurementTime;
    }

    public String getParentSensorId() {
        return parentSensorId;
    }

    public void setParentSensorId(String parentSensorId) {
        this.parentSensorId = parentSensorId;
    }
}
