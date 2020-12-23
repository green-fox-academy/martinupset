package com.example.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Fox {

    private String name;
    private List<String> tricks;
    private String food;
    private String drink;

    public Fox() {
        System.out.println("miao");
        this.name = "";
        this.tricks = new ArrayList<String>();
        this.food = "";
        this.drink = "";
    }

    public void newFox(String name){
        this.name = name;
    }

    public void setFood(String food) {
        System.out.println(food);
        this.food = food;
    }

    public void setDrink(String drink) {
        System.out.println(drink);
        this.drink = drink;
    }

}
