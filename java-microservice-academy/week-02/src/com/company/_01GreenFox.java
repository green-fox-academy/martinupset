package com.company;

import java.util.ArrayList;

public class _01GreenFox {
    public static void main(String[] args){
        ArrayList<_01Person> people = new ArrayList<>();

        _01Person mark = new _01Person("Mark", 46, "male");
        people.add(mark);
        _01Person jane = new _01Person();
        people.add(jane);
        _01Student john = new _01Student("John Doe", 20, "male", "BME");
        people.add(john);
        _01Student student = new _01Student();
        people.add(student);
        _01Mentor gandhi = new _01Mentor("Gandhi", 148, "male", "senior");
        people.add(gandhi);
        _01Mentor mentor = new _01Mentor();
        people.add(mentor);
        _01Sponsor sponsor = new _01Sponsor();
        people.add(sponsor);
        _01Sponsor elon = new _01Sponsor("Elon Musk", 46, "male", "SpaceX");
        people.add(elon);

        student.skippedDays(3);

        for (int i = 0; i < 5; i++) {
            elon.hire();
        }

        for (int i = 0; i < 3; i++) {
            sponsor.hire();
        }

        for(_01Person person : people) {
            person.introduce();
            person.getGoal();
        }

        _01Cohor awesome = new _01Cohor("AWESOME");
        awesome.addStudent(student);
        awesome.addStudent(john);
        awesome.addMentor(mentor);
        awesome.addMentor(gandhi);
        awesome.info();
    }
}
