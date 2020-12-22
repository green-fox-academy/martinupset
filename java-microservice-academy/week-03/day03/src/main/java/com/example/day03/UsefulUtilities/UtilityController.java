package com.example.day03.UsefulUtilities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/useful")
public class UtilityController {
    private UtilityService utilityService;

    @Autowired
    public UtilityController(UtilityService utilityService) {
        this.utilityService = utilityService;
    }

    @RequestMapping()
    public String mainPage() {
        return "main";
    }

    @RequestMapping("/colored")
    public String showColorPage(Model model) {
        model.addAttribute("backgroundColor", utilityService.randomColor());
        return "colored";
    }

    @RequestMapping("/email")
    public String showEmailPage(@RequestParam("email") String email, Model model) {
        boolean isValid = utilityService.validateEmail(email);
        model.addAttribute("color", isValid ? "green" : "red");
        model.addAttribute("message", isValid ? email + "is a valid email address" :
                email+"is nota valid email address");
        return "email";
    }

    @RequestMapping("/encoder")
    public @ResponseBody String encodeMessage(@RequestParam("text") String text, @RequestParam("number") int number) {
        return utilityService.caesar(text, number);
    }

    @RequestMapping("/decoder")
    public @ResponseBody String decodeMessage(@RequestParam("text") String text, @RequestParam("number") int number) {
        return utilityService.caesar(text, -number);
    }
}
