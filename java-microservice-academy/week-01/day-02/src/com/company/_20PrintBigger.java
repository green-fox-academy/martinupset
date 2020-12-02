package com.company;
import java.util.Scanner;

public class _20PrintBigger {
    public static void main(String[] args) {
        System.out.print("2 num:");
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int n = scan.nextInt();
        scan.close();
        if (a > n) {
            System.out.print(a);
        }
        else {
            System.out.print(n);
        }
        // Write a program that asks for two numbers and prints the bigger one
    }
}
