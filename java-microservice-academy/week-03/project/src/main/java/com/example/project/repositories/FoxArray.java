package com.example.project.repositories;

import com.example.project.service.Fox;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FoxArray {

    private List<Fox> foxArray;

    @Autowired
    public FoxArray(){

    }
}
