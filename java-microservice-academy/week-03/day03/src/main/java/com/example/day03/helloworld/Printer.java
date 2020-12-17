package com.example.day03.helloworld;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class Printer {
    public void log(String message) {
        System.out.println("bbbb" + LocalDateTime.now() + " aaa MY PRINTER SAYS --- " + message);
    }
}
