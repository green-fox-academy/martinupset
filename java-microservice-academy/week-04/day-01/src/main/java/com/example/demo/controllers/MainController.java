package com.example.demo.controllers;

import com.example.demo.modal.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
    @GetMapping("/")
    public String showMainPage() {
        return "index";
    }

    @GetMapping("/doubling")
    @ResponseBody
    public Doubling showDoubles(@RequestParam(value = "input", required = false) String input) {
        Doubling result = new Doubling(input);
        return result;
    }

    @GetMapping("/greeter")
    @ResponseBody
    public Greet showGreeter(@RequestParam(value = "name") String name,
                             @RequestParam(value = "title") String title) {
            String msg = String.format("Oh, hi there %s, my dear %s!", name, title);
            return new Greet(msg);
    }

    @GetMapping("/appenda/{appendable}")
    @ResponseBody
    public AppendA showAppendA(@PathVariable("appendable") String appendable) {
        return new AppendA(appendable);
    }

    @PostMapping("/dountil/{action}")
    @ResponseBody
    public DoUntil showDoUntil(@PathVariable("action") String action, @RequestBody Until until) {
        if (action.equals("sum")) {
            return DoUntil.sumUntil(until.getUntil());
        } else {
            return DoUntil.factorUntil(until.getUntil());
        }
    }
}
