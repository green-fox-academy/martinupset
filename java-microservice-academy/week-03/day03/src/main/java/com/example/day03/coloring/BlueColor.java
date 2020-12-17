package com.example.day03.coloring;

import com.example.day03.helloworld.Printer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlueColor implements MyColor{
    @Autowired
    private Printer printer;
    @Override
    public void printColor() {
        printer.log("blue");
    }
}
