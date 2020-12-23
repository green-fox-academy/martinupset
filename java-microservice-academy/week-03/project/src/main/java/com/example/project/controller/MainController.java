package com.example.project.controller;

import com.example.project.service.Fox;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    private Fox fox;

    @Autowired
    public MainController(Fox fox){
        this.fox = fox;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String showMainPage(@RequestParam(value = "name", required = false) String name, Model model) {
        if (name != null){
            model.addAttribute("name", name);
        }
        else {
            model.addAttribute("name", "");
        }
        return "index";
    }

    @RequestMapping(value = "/login", method=RequestMethod.GET)
    public String showLoginPage() {return "login";}

    @RequestMapping(value="/login", method= RequestMethod.POST)
    public String postLogin(@RequestParam("name") String name) {
        fox.newFox(name);
        return "redirect:/?name=" + name;
    }
}
