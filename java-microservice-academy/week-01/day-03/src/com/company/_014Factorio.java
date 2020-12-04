package com.company;

public class _014Factorio {
    public static void main(String arg[]){
        System.out.println(factorio(5));
    }

    public static int factorio (int par){
        int factorio = 1;
        for(int i =1; i<=par; i++){
            factorio *= i;
        }
        return factorio;
    }
//Create the usual class wrapper
//  and main method on your own.

// - Create a function called `factorio`
//   that returns it's input's factorial
}
