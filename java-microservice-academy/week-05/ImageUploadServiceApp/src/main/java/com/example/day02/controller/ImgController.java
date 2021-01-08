package com.example.day02.controller;

import com.example.day02.services.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
@RequestMapping("/upload")
public class ImgController {
    private PhotoService photoService;

    @Autowired
    public ImgController(PhotoService photoService){
        this.photoService = photoService;
    }

    @GetMapping
    public String showPage(){
        return "upload";
    }

    @PostMapping
    public String addPhoto(@RequestParam("title") String title,
                           @RequestParam("file") MultipartFile image, Model model)
            throws IOException {
        String id = photoService.addPhoto(title, image);
        return "redirect:/upload";
    }


}
