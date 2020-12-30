package com.example.demo.modal;

public class DoUntil {
    private int result;

    public DoUntil(int until) {
        this.result = until;
    }

    public int getResult() {
        return result;
    }

    public static DoUntil sumUntil(int value) {
        int sum = 0;
        for (int i = 0; i <= value; i++){
            sum += i;
        }
        return new DoUntil(sum);
    }

    public static DoUntil factorUntil(int value) {
        int sum = 1;
        for (int i = 1; i <= value; i++){
            sum *= i;
        }
        return new DoUntil(sum);
    }
}
