package com.example.demo.exception;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Component
@ControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler(MissingServletRequestParameterException.class)
    @ResponseBody
    public String doNullRequest(MissingServletRequestParameterException ex){
        return "error";
    }
}
