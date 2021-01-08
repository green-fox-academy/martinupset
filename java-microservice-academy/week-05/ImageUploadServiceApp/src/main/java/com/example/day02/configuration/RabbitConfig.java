package com.example.day02.configuration;

import com.example.day02.messaging.MessageHandler;
import org.springframework.amqp.core.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {

    public static final String EXCHANGE_NAME = "boot_topic_exchange";
    public static final String QUEUE_NAME = "boot_queue";

    @Bean("bootExchange")
    public Exchange bootExchange(){
        return ExchangeBuilder.topicExchange(EXCHANGE_NAME).durable(true).build();
    }

    @Bean("bootQueue")
    public Queue bootQueue(){
        return QueueBuilder.durable(QUEUE_NAME).build();
    }

    @Bean
    public Binding bindQueueExchange(@Qualifier("bootQueue") Queue queue, @Qualifier("bootExchange") Exchange exchange){
        return BindingBuilder.bind(queue).to(exchange).with("imageApp.#").noargs();
    }

    @Bean
    public FanoutExchange exchange(){
        return new FanoutExchange("fan001");
    }

    @Bean
    public Queue rabbitTest1(){
        return new Queue("rabbitTest1");
    }

    @Bean
    public Queue rabbitTest2(){
        return new Queue("rabbitTest2");
    }

    @Bean
    public Binding rabbitTest1Binding(){
        return BindingBuilder.bind(rabbitTest1()).to(exchange());
    }

    @Bean
    public Binding rabbitTest2Binding(){
        return BindingBuilder.bind(rabbitTest2()).to(exchange());
    }

    @Bean
    public MessageHandler messageHandler1(){
        return new MessageHandler();
    }

    @Bean
    public MessageHandler messageHandler2(){
        return new MessageHandler();
    }
}
