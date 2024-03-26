package com.java.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.event.model.User;
import java.util.Optional;



public interface UserRepository extends JpaRepository<User, String>{
 
    Optional<User> findByEmail(String email);
    
} 