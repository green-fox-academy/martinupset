package com.greenfoxacademy.springstart.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class HelloRESTController {
    AtomicLong lockCount = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeing(@RequestParam("name") String name) {
        lockCount.incrementAndGet();
        return new Greeting(lockCount.get(), name);
    }
}
