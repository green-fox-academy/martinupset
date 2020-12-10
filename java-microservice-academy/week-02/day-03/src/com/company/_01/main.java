package com.company._01;

public class main {
    public static void main(String[] args) throws CloneNotSupportedException {
        _01Student student = new _01Student("John", 20, "male", "BME");
        _01Student johnTheClone = (_01Student) student.clone();
        System.out.println(johnTheClone.previousOrganization);
    }
}
