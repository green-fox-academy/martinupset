package com.example.day03.GreenFox;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/gfa")
public class GreenFox {
    private StudentService studentService;

    @Autowired
    public GreenFox(StudentService studentService) {
        this.studentService = studentService;
    }

    @RequestMapping()
    public String gfa(Model model) {
        model.addAttribute("count", studentService.count());
        return "gfa";

    }
    @RequestMapping("list")
    public String list(Model model){
        model.addAttribute("studentList", studentService.findAll());
        return "list";
    }

    @RequestMapping(value = "add")
    public String add(Model model) {
        model.addAttribute("mode","add");
        return "add";
    }

    @RequestMapping(value = "save", method = RequestMethod.POST)
    public String save(@RequestParam("name")String name){
        studentService.save(name);
        return "redirect:/gfa/list";
    }

    @GetMapping(value = "check")
    public String check(Model model){
        model.addAttribute("mode", "check");
        return "add";
    }

    @RequestMapping(value = "check", method = RequestMethod.POST)
    public String check(Model model,@RequestParam("name")String name){
        String haveValue = "this word exist!";
        String notHaveValue = "this word do not exist!";
        model.addAttribute("text", studentService.check(name)?haveValue:notHaveValue);
        return "add";
    }
}
