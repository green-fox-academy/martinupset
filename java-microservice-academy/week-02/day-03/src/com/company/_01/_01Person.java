package com.company._01;

public class _01Person {
      String name;
      int age;
      String gender;

    public _01Person(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    void introduce(){
        System.out.printf("Hi, I'm %s, a %d year old %s.",name, age, gender);
    }

    void getGoal(){
        System.out.println("My goal is:Live for the moment!");
    }



    public _01Person(){
        this("Jane Doe",30, "female");
    }
}
