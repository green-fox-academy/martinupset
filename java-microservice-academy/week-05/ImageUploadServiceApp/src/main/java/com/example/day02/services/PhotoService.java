package com.example.day02.services;

import com.example.day02.model.ImageUpload;
import com.example.day02.reposity.PhotoReposity;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class PhotoService {

    @Autowired
    private PhotoReposity photoRepo;

    public String addPhoto(String title, MultipartFile file) throws IOException {
        ImageUpload photo = new ImageUpload(title);
        photo.setImage(
                new Binary(BsonBinarySubType.BINARY, file.getBytes()));
        photo = photoRepo.insert(photo); return photo.getId();
    }

    public ImageUpload getPhoto(String id) {
        return photoRepo.findById(id).get();
    }
}
