package com.backend.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.toystore.model.Buy;

import java.util.List;

@Repository
public interface BuyRepo extends JpaRepository<Buy, Integer> {
    List<Buy> findByEmail(String email);
}