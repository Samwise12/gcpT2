package com.example.demo;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
//@Table(name = "user_group")
public class DemoModel {
    @Id @GeneratedValue
    private Long id;
    @NonNull
    private String name;
}
