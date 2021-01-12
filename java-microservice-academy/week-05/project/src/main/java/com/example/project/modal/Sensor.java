package com.example.project.modal;

import org.springframework.beans.factory.parsing.Location;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Sensor {
    @Id private String id;
    private double lat;
    private double lon;
    private Weather weather;

    public Sensor(double lat, double lon, Weather weather) {
        this.lat = lat;
        this.lon = lon;
        this.weather = weather;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    public Weather getWeather() {
        return weather;
    }

    public void setWeather(Weather weather) {
        this.weather = weather;
    }
}
