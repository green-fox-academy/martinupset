package com.example.day03;

import com.example.day03.coloring.BlueColor;
import com.example.day03.coloring.RedColor;
import com.example.day03.config.SpringConfig;
import com.example.day03.helloworld.CommandLineRunnerService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class Day03Application {

    public static void main(String[] args) {

//        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
////        System.out.println(ctx);
//        CommandLineRunnerService commandLineRunnerService
//                = (CommandLineRunnerService) ctx.getBean("commandLineRunnerService");
//        commandLineRunnerService.run(args);
//
//        BlueColor blueColor = (BlueColor) ctx.getBean("blueColor");
//        blueColor.printColor();
//
//        RedColor redColor = (RedColor) ctx.getBean("redColor");
//        redColor.printColor();

        SpringApplication.run(Day03Application.class, args);
    }

}
