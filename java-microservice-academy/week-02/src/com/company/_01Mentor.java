package com.company;

public class _01Mentor extends _01Person{
    String level;
    void getGoal(){
        System.out.println("Edate brilliant junior softare developer");
    }
    void introduce(){
        System.out.printf("Hi, I am %s, a %d year old %s %s mentor", name, age, gender,level);
    }

    public _01Mentor(String name, int age, String gender, String level){
        super(name, age, gender);
        this.level = level;
    }

    public _01Mentor(){
        this("Jane Doe", 30, "female", "interedite");
    }
}
