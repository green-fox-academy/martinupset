package com.example.day03.GreenFox;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/gfa")
public class GreenFox {
    private StudentService studentService;

    @Autowired
    public GreenFox(StudentService studentService) {
        this.studentService = studentService;
    }

    @RequestMapping()
    public String gfa(){
        return "gfa";
    }
    @RequestMapping("list")
    public String list(){
        return "list";
    }
}
