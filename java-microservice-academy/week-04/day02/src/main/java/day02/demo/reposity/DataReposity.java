package day02.demo.reposity;

import day02.demo.model.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataReposity extends CrudRepository<Todo, Long> {
}
