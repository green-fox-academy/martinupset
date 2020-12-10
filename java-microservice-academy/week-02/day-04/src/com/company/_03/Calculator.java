package com.company._03;

public class Calculator<T extends Number> {

    protected T value1;
    protected T value2;

    public Calculator(T value1, T value2) {
        this.value1 = value1;
        this.value2 = value2;

    }
    public double add() {
        return value1.doubleValue() + value2.doubleValue();
    }

    public double subtract() {
        return value1.doubleValue() - value2.doubleValue();
    }

    public double multiply() {
        return value1.doubleValue() * value2.doubleValue();
    }

    public double divide() {
        return value1.doubleValue() / value2.doubleValue();
    }
}
