package com.backend.toystore.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.toystore.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String username);
}
