package com.example.day01;

import com.example.day01.mapreduce.JobMain;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class Day01Application {

    public static void main(String[] args) {
        SpringApplication.run(Day01Application.class, args);

        try {
            new JobMain().run();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
