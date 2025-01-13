package com.fitness.gymmanagement.repository;

import com.fitness.gymmanagement.models.Payments;
import com.fitness.gymmanagement.models.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentsRepository extends JpaRepository<Payments, Long> {
	public Payments findByMember(Member member);
}
