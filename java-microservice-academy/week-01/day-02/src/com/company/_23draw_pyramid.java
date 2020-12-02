package com.company;
import java.util.Scanner;

public class _23draw_pyramid {
    public static void main(String[] args) {
        System.out.println("input num：");
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        for (int i=0;i<=a;i++ )
        {
            for (int k=1;k<=a-i ;k++ )
            {
                System.out.print(" ");
            }
            for (int j=0; j<2*i-1 ;j++ )
            {
                System.out.print("*");
            }

            System.out.print("\n");
        }

    }
    // Write a program that reads a number from the standard input, then draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as the number was
}
