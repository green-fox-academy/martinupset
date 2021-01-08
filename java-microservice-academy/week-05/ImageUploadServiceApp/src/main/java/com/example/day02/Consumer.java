package com.example.day02;

import com.rabbitmq.client.*;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class Consumer {
    public static void main(String[] args) {
        ConnectionFactory factory = new ConnectionFactory();

        try(Connection connection = factory.newConnection()){
            Channel channel = connection.createChannel();
            channel.queueDeclare("hello-world", false,false,false,null);

            channel.basicConsume("hello-world",true,(consumerTag, message) -> {
                String m = new String(message.getBody(), "UTF-8");
                System.out.println("I just receive the message = " + m);
            }, consumerTag -> {});
        } catch (TimeoutException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
