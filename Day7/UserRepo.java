package com.backend.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.toystore.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
}
