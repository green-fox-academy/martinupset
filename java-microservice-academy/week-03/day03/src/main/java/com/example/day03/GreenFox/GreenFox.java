package com.example.day03.GreenFox;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
    public String list(Model model){
        model.addAttribute("studentList", studentService.findAll());
        return "list";
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public String add(String name){
        studentService.save(name);
        return "add";
    }
}
