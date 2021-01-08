package com.example.day02.reposity;

import com.example.day02.model.ImageUpload;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhotoReposity extends MongoRepository<ImageUpload, String> {
}
