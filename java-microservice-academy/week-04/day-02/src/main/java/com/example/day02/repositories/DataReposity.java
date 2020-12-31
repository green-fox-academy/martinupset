package com.example.day02.repositories;

import com.example.day02.model.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataReposity extends CrudRepository<Todo, Long> {
}
