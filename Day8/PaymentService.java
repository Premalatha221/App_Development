package com.backend.toystore.service;



import com.backend.toystore.model.Payment;
import com.backend.toystore.repository.PaymentRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepo paymentRepository;

    public Payment create(Payment payment) {
        return paymentRepository.save(payment);
    }

    public List<Payment> getAll() {
        return paymentRepository.findAll();
    }

    public Payment getById(int paymentId) {
        return paymentRepository.findById(paymentId).orElse(null);
    }

    public boolean update(int paymentId, Payment payment) {
        if (this.getById(paymentId) == null) {
            return false;
        }
        try {
            paymentRepository.save(payment);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int paymentId) {
        if (this.getById(paymentId) == null) {
            return false;
        }
        paymentRepository.deleteById(paymentId);
        return true;
    }
}
