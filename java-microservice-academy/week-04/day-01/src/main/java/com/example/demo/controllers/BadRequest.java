package com.example.demo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequest extends RuntimeException{
    private String error;

    public BadRequest(String msg){
        this.error = msg;
    }

    public String getError() {
        return error;
    }
}
