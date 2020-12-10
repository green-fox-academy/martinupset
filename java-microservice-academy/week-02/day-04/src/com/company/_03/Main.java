package com.company._03;

public class Main {
    public static void main(String[] args) {
        Calculator<Integer> generalInt = new Calculator<>(3,4);
        System.out.println(generalInt.add());
        System.out.println(generalInt.subtract());
        System.out.println(generalInt.divide());
        System.out.println(generalInt.multiply());


    }
}
