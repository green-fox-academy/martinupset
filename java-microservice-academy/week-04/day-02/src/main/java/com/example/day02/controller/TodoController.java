package com.example.day02.controller;

import com.example.day02.repositories.DataReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RequestMapping("Todo")
@Controller
public class TodoController {
    private DataReposity dataReposity;

    @Autowired
    public TodoController(DataReposity dataReposity) {
        this.dataReposity = dataReposity;
    }

    @GetMapping({"/", "/list"})
    public String list(Model model) {
        return "firstTodo";
    }

    ;

}
