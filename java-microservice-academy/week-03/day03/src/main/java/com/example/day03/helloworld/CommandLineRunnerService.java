package com.example.day03.helloworld;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

@Service
public class CommandLineRunnerService implements CommandLineRunner {
    @Autowired
    private Printer printer;

    @Override
    public void run(String...args){
        printer.log("hello");
    }
}
