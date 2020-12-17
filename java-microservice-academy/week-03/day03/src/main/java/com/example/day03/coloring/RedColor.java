package com.example.day03.coloring;

import org.springframework.stereotype.Service;

@Service
public class RedColor implements MyColor{
    public void printColor() {
       System.out.println("red");
    }
}
