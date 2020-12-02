package com.company;
import java.util.Scanner;

public class _16AnimalsAndLegs {
    public static void main(String[] args) {
        System.out.println("chicken:");
        Scanner scanner = new Scanner(System.in);
        int userInput = scanner.nextInt();
        System.out.println("Pig:");
        Scanner scanner1 = new Scanner(System.in);
        int userInput1 = scanner.nextInt();
        int Legs = userInput*2 + userInput1 * 4;
        System.out.println("Legs:" + Legs);
        // Write a program that asks for two integers
        // The first represents the number of chickens the farmer has
        // The second represents the number of pigs owned by the farmer
        // It should print how many legs all the animals have
    }
}
