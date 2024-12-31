package com.fitness.gymmanagement.repository;

import com.fitness.gymmanagement.models.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {

    public Member findByContact(String Contact);

}
