package day02.demo.reposity;

import day02.demo.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public class AppRunner implements CommandLineRunner {

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public void run(String... args) throws Exception {
        Book animalFarm = new Book("Animal Farm", "George Orwell", LocalDate.of(1945, 8, 17));
        mongoTemplate.insert(animalFarm);
        System.out.println("Collection Exists? " + mongoTemplate.collectionExists("book"));
    }
}
