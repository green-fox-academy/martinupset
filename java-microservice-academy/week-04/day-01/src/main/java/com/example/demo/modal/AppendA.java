package com.example.demo.modal;

public class AppendA {
    private String appended;

    public AppendA(String appended) {
        this.appended = appended + 'a';
    }

    public String getAppended() {
        return appended;
    }
}
