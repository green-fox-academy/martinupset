package com.company;

public class _01Sponsor extends _01Person{
    String company;
    int hiredStudents;

    public void introduce(){
        System.out.printf("Hi, I'm %s, a %d year old %s who represents %s and hired %s students so far."
        ,name,age,gender,company,hiredStudents);
    }

    public void hire() {
        this.hiredStudents += 1;
    }

    public void getGoal(){
        System.out.println("Hire brilliant junior software developers.");
    }

    public _01Sponsor(String name, int age, String gender, String company){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
        this.hiredStudents = 0;
    }

    public _01Sponsor(){
        this("Jane Doe", 30, "female", "google");
    }
}
