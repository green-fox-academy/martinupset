package com.company;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
//        addNumber(3, 0.5);
	// write your code here
        ArrayList<String> string = new ArrayList<>();
        string.add("hello");
        string.add("second");
        printDate(string);

        ArrayList<Integer> integer = new ArrayList<>();
        integer.add(3);
        integer.add(67);
        printDate(integer);

        General<Integer> general = new General<>(6);
        General<String> string1 = new General<>("aaa");
        System.out.println(general.getT());
        System.out.println(string1.getT());
    }

//    public static <T> double addNumber(T a, T b){
//        return a.doubleValue() + b.doubleValue();
//    }

    public static <A extends Iterable> void printDate(A dataStructure) {
        dataStructure.forEach(x -> {
            System.out.println(x);
        });
    }
}
