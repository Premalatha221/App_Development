package com.backend.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.toystore.model.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment, Integer> {
}
