package com.backend.toystore.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.toystore.model.AddWish;
public interface AddWishRepo extends JpaRepository<AddWish, Integer> {
}