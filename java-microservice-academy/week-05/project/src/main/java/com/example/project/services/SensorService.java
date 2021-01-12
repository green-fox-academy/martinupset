package com.example.project.services;

import com.example.project.modal.Sensor;
import com.example.project.modal.Weather;
import com.example.project.reposity.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class SensorService {
    private SensorRepository sensorRepository;

    @Autowired
    public SensorService(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    public Sensor generateSensor(double lat, double lon){
        Random random = new Random();
        double r1 = random.nextDouble() * 26;
        double r2 = random.nextDouble() * 5;
        double r3 = random.nextDouble() * 15;
        Weather newWeather = new Weather(r1, r2, r3);
        Sensor newSensor = new Sensor(lat, lon, newWeather);
        sensorRepository.insert(newSensor);
        return newSensor;
     }

     public List<Sensor> getSensor(){
        List<Sensor> list = sensorRepository.findAll();
        return list;
     }
}
