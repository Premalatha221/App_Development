package com.backend.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.toystore.model.Feedback;




public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {
}