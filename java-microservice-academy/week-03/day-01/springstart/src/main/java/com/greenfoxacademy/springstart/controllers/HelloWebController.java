package com.greenfoxacademy.springstart.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.concurrent.atomic.AtomicLong;

@Controller
public class HelloWebController {
    AtomicLong lockCount = new AtomicLong();
    @RequestMapping("/web/greeting")
    public String greeting(Model model, @RequestParam(name = "name",required = false) String name) {
        lockCount.incrementAndGet();
        if (name != null) {
            model.addAttribute("name", name);
        }
        else{
            model.addAttribute("name", " World");
        }
        model.addAttribute("count",lockCount.get());
        return "greeting";
    }
}
