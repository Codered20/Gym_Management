package com.fitness.gymmanagement.controllers;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.fitness.gymmanagement.models.Member;
import com.fitness.gymmanagement.models.Payments;
import com.fitness.gymmanagement.repository.MemberRepository;
import com.fitness.gymmanagement.repository.PaymentsRepository;
import com.fitness.gymmanagement.services.MemberService;
import com.fitness.gymmanagement.services.PaymentsService;

@RestController
@RequestMapping("/payments")
public class PaymentsController {
    
    @Autowired
    PaymentsService paymentsService;
    
    @Autowired
    MemberService memberService;

    @PostMapping("/savePayment")
    public ResponseEntity<?> savePayment(@RequestParam Integer amount, @RequestParam String contact) {
        // Validate amount
        if (amount == null || amount <= 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid payment amount");
        }

        // Find member by contact
        Member member = memberService.findByContact(contact);
        if (member == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Member not found");
        }

        // Create and save payment
        Payments payment = new Payments();
        payment.setMember(member);
        payment.setAmount(amount);
        payment.setPaymentDate(LocalDate.now());

        Payments savedPayment = paymentsService.addPayment(payment);

        return ResponseEntity.ok(savedPayment);  // Return the saved payment
    }

    
    @GetMapping("/getPayment/{contact}")
    public ResponseEntity<?> getPayment(@PathVariable("contact") String contact) {
    	Member member = memberService.findByContact(contact);
    	if (member == null) {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Member not found");
        }
    	return ResponseEntity.ok(paymentsService.findByMember(member));
    }
    
}
