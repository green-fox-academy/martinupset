package com.company;
import java.util.Scanner;

public class _17AverageOfInput {
    public static void main(String[] args) {
        System.out.println("5 num:");
        Scanner scanner = new Scanner(System.in);
        String[] str = scanner.nextLine().split(" ");
        scanner.close();
        int[] num = new int[str.length];
        int sum = 0;
        for(int i=0;i<5;i++)
            num[i] = Integer.parseInt(String.valueOf(str[i]));
        for (int j=0;j<5;j++)
            sum += num[j];
        int average = sum/5;
        System.out.println("sum:" + sum);
        System.out.println("average:" + average);
        // Write a program that asks for 5 integers in a row,
        // then it should print the sum and the average of these numbers like:
        //
        // Sum: 22, Average: 4.4
    }
}
