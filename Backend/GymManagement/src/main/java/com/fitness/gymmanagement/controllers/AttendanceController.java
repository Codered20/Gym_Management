package com.fitness.gymmanagement.controllers;

import com.fitness.gymmanagement.models.Attendance;
import com.fitness.gymmanagement.models.Member;
import com.fitness.gymmanagement.models.enums.AttendanceStatus;
import com.fitness.gymmanagement.services.AttendanceService;
import com.fitness.gymmanagement.services.MemberService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@RestController
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @Autowired
    private MemberService memberService;

    @PostMapping("/markAttendance")
    public Attendance markAttendance(@RequestParam AttendanceStatus status, @RequestParam String contact) {

        Member member = memberService.findByContact(contact);
        if(member==null) {
        	throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Attendance check = attendanceService.findByMember(member);
        Attendance attendance = new Attendance();
        if(check!=null) {
        	check.setDate(LocalDate.now());
        	check.setStatus(status);
        	attendance = check;
        }else {
        	attendance = new Attendance();
        	attendance.setMember(member);
            attendance.setStatus(status);
            attendance.setDate(LocalDate.now());
        }
        return attendanceService.save(attendance);
    }
    @GetMapping("/allAttendance")
    public List<Attendance> getAttendance() {
        return attendanceService.findAll();
    }
    
    @GetMapping("/attendance/{contact}")
    public ResponseEntity<?> getAttendanceByContact(@PathVariable("contact") String contact) {
        Member member = memberService.findByContact(contact);
        
        if (member == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Member not found");
        }

        Attendance attendance = attendanceService.findByMember(member);

        if (attendance == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Attendance record not found");
        }

        return ResponseEntity.ok(attendance);
    }

    
    @DeleteMapping("/unmark/{contact}")
    public void deleteAttendance(@PathVariable("contact") String contact) {
        Member member = memberService.findByContact(contact);
        Attendance attendance = attendanceService.findByMember(member);
        attendanceService.delete(attendance.getId());
    }
}
