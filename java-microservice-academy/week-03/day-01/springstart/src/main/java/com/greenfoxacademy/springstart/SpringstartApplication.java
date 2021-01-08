package com.greenfoxacademy.springstart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringstartApplication {

    public static void main(String[] args) {

        SpringApplication.run(SpringstartApplication.class, args);

        new Inter(){
            @Override
            public void show() {
                System.out.println("aaa");
            }
        }.show();
    }

    interface Inter{
        void show();
    }

}
