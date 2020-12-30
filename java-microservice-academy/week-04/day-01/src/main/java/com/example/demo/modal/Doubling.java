package com.example.demo.modal;

public class Doubling {
    private int received;
    private int result;
    private String error;

    public int getReceived() {
        return received;
    }

    public int getResult() {
        return result;
    }

    public String getError() {
        return error;
    }

    public Doubling(String received){
        if(received == null){
            this.error = "Please provide an input!";
        }
        else{
            this.result = Integer.parseInt(received)*2;
            this.received = Integer.parseInt(received);
        }
    }
}
