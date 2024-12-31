package com.fitness.gymmanagement.repository;

import com.fitness.gymmanagement.models.Payments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentsRepository extends JpaRepository<Payments, Long> {

}
