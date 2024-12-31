package com.fitness.gymmanagement.controllers;

import com.fitness.gymmanagement.models.Attendance;
import com.fitness.gymmanagement.models.Member;
import com.fitness.gymmanagement.repository.MemberRepository;
import com.fitness.gymmanagement.services.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @Autowired
    private MemberRepository memberRepository;

    @PostMapping("/markAttendance")
    public Attendance markAttendance(@RequestBody Attendance attendance) {

        Member member = memberRepository.findById(attendance.getMember().getId())
                .orElseThrow(() -> new RuntimeException("Member not found"));
        Attendance check = attendanceService.findByDate(attendance.getDate());
        if (check != null && check.getMember().getId()==member.getId()) {return check;}
//        System.out.println(attendance.getDate()+" "+attendance.getMember()+" "+attendance.getStatus());
        return attendanceService.save(attendance);
    }
    @GetMapping("/allAttendance")
    public List<Attendance> getAttendance() {
        return attendanceService.findAll();
    }

    @PutMapping("attendance/{id}")
    public Attendance updateAttendance(@RequestBody Attendance at, @PathVariable("id") Long id) {
        return attendanceService.save(at);
    }

    @DeleteMapping("unmark/{id}")
    public void deleteAttendance(@PathVariable("id") Long id) {
        attendanceService.delete(id);
    }
}
