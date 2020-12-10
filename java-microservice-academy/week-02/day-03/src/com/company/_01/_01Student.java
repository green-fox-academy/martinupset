package com.company._01;

public class _01Student extends _01Person implements Cloneable{
     String previousOrganization;
     int skippedDays;

    public void getGoal(){
     System.out.println("Be a junior software develop");
    }

    public void introduce(){
        System.out.printf("hi, I'm %s, a %d year old %s from %s who skipped %d days from the course already.",
                this.name, this.age, this.gender, previousOrganization, skippedDays);
    }

    public void skippedDays(int numberofDays){
        this.skippedDays += numberofDays;
    }

    public _01Student(String name, int age, String gender, String previousOrganization){
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }

    public _01Student(){
        this("Jane Doe", 30, "female", "the school of life");
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
