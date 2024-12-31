package com.fitness.gymmanagement.controllers;

import com.fitness.gymmanagement.models.Member;
import com.fitness.gymmanagement.services.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("/saveMember")
    public Member saveMember(@RequestBody Member member){
        System.out.println(member.getAge()+" "+member.getContact()+" "+member.getMembershipType());
        return memberService.save(member);
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
        oldMember.setContact(member.getContact());
        oldMember.setMembershipType(member.getMembershipType());
        return memberService.save(oldMember);
    }
}
