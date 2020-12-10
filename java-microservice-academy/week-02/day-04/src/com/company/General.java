package com.company;

public class General<T> {
    private T t;

    public General(T t){
        this.t = t;
    }

    public T getT(){
        return t;
    }
}
