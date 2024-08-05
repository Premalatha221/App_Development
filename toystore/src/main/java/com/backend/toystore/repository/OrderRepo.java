package com.backend.toystore.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.toystore.model.Orders;

public interface OrderRepo extends JpaRepository<Orders, Integer> {
}