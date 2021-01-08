package com.example.day02;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class Sender {
    public static void main(String[] args) {
        ConnectionFactory factory = new ConnectionFactory();

        try(Connection connection = factory.newConnection()){
            Channel channel = connection.createChannel();
            channel.queueDeclare("hello-world", false,false,false,null);

            String message = "is this the matrix?";
            channel.basicPublish("","hello-world",false,null,message.getBytes());

            System.out.println("!!! message has been sent!miao");
        } catch (TimeoutException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
