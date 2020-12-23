package com.example.project.controller;

import com.example.project.service.Fox;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class FoxController {
    private Fox fox;

    @Autowired
    public FoxController(Fox fox){
        this.fox = fox;
    }


    @RequestMapping(value = "/nutritionStore", method = RequestMethod.GET)
    public String nutritionStore(){
        return "nutrition";
    }

    @RequestMapping(value = "/nutritionStore", method = RequestMethod.POST)
    public String nutritionPost(@RequestParam("food") String food, @RequestParam("drink") String drink){
    fox.setDrink(drink);
    fox.setFood(food);
    return "redirect:/";
    }
}
