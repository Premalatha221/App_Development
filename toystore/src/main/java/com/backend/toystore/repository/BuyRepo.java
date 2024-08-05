package com.backend.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.toystore.model.Buy;

public interface BuyRepo extends JpaRepository<Buy, Integer> {
}
