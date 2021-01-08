package day02.demo.controller;

import day02.demo.model.Todo;
import day02.demo.reposity.DataReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@RequestMapping("Todo")
@Controller
public class TodoController {
    private DataReposity dataReposity;
    private MongoTemplate mongodb;

    @Autowired
    public TodoController(DataReposity dataReposity, MongoTemplate mongodb) {
        this.dataReposity = dataReposity;
        this.mongodb = mongodb;
    }

    @GetMapping({"/", "/list"})
    public String list(Model model) {
        model.addAttribute("todos", dataReposity.findAll());
        return "firstTodo";
    };

    @GetMapping("/add")
    public String showAdd(){
        return "addTodo";
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public String addTodo(String todoTitle){
        dataReposity.save(new Todo(todoTitle));
        return "redirect:/Todo/";
    }

    @GetMapping("/mongoget")
    public String mongoList(Model model) {
        model.addAttribute("todos",mongodb.getCollection("restaurants").find().limit(4));
        return "mongoTodo";
    };

}
