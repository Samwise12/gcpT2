package com.example.demo;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
public class UserModel {
    @GeneratedValue @Id
    private long id;
    @NonNull
    private String username;
    private String password;
}
