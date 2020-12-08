package com.company;
import java.util.ArrayList;

public class _01Cohor {
    String name;
    ArrayList students;
    ArrayList mentors;

    public void addStudent(_01Student student){
        students.add(student);
    }

    public void addMentor(_01Mentor Mentor){
        mentors.add(Mentor);
    }

    public void info(){
        System.out.printf("The %s cohort has %d students and %d mentors.", name,  students.size(), mentors.size());
    }

    public _01Cohor(String name) {
        this.name = name;
        students = new ArrayList<>();
        mentors = new ArrayList<>();
    }
}
