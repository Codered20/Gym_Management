package com.fitness.gymmanagement.services;

import com.fitness.gymmanagement.models.Member;
import com.fitness.gymmanagement.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    // Get all members
    public List<Member> findAll() {
        return memberRepository.findAll();
    }

    // Find member by ID
    public Member findById(Long id) {
        // You can handle the Optional better, like throwing a custom exception if not found
        return memberRepository.findById(id).get();
    }

    // Save or update member
    public Member save(Member member) {
        return memberRepository.save(member);
    }

    // Delete member
    public void delete(Member member) {
        memberRepository.delete(member);
    }

    // Optionally, add other methods like findByContactNumber if required
    public Member findByContact(String contact) {
        return memberRepository.findByContact(contact);
    }
}
