package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class DemoInitializer implements CommandLineRunner {
    private final DemoRepository repository;

    public DemoInitializer(DemoRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
/*        Stream.of("Joe", "Abe").forEach(name ->
//                        System.out.println(name)
                    repository.save(new DemoModel(name))
        );*/
        repository.findAll().forEach(System.out::println);
    }

}
