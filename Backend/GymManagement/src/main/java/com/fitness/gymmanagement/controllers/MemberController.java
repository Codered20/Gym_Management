package com.fitness.gymmanagement.controllers;

import com.fitness.gymmanagement.models.Member;
import com.fitness.gymmanagement.services.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.List;

@CrossOrigin
@RestController
public class MemberController {

    @Autowired
    MemberService memberService;
    
    @Autowired
    private PasswordEncoder passwordEncoder; // Inject BCryptPasswordEncoder

    @PostMapping("/saveMember")
    public ResponseEntity<?> saveMember(@RequestBody Member member) {
        // Check if member already exists
        if (memberService.findByContact(member.getContact()) != null) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Member with this contact already exists");
        }

        // Validate that password is not null or empty
        if (member.getPassword() == null || member.getPassword().trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password cannot be empty");
        }

        // Hash the password before saving
        member.setPassword(passwordEncoder.encode(member.getPassword()));

        // Save member
        Member savedMember = memberService.save(member);

        // Avoid exposing sensitive data
        savedMember.setPassword("********"); // Mask password in response

        return ResponseEntity.status(HttpStatus.CREATED).body(savedMember);
    }
    
    @GetMapping("/authenticate/{contact}/{password}")
    public ResponseEntity<?> authenticate(@PathVariable String contact, @PathVariable String password) {
        Member member = memberService.findByContact(contact);
        
        if (member == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found!");
        }

        // Securely compare hashed password
        if (passwordEncoder.matches(password, member.getPassword())) {
        	member.setPassword("**********");
            return ResponseEntity.ok(member); // Return authenticated user
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials!");
    }

    @DeleteMapping("/deleteMember/{contact}")
    public void deleteMember(@PathVariable String contact){
        Member member = memberService.findByContact(contact);
        memberService.delete(member);
    }

    @GetMapping("/getMembers")
    public List<Member> getMembers(){
        return memberService.findAll();
    }

    @PutMapping("/updateMember")
    public Member updateMember(@RequestBody Member member){
        Member oldMember = memberService.findByContact(member.getContact());
        oldMember.setAge(member.getAge());
//        oldMember.setContact(member.getContact());
        oldMember.setMembershipType(member.getMembershipType());
        return memberService.save(oldMember);
    }
}
