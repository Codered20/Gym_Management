package com.fitness.gymmanagement.services;

import com.fitness.gymmanagement.models.Attendance;
import com.fitness.gymmanagement.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    public List<Attendance> findAll() {
        return attendanceRepository.findAll();
    }

    public Attendance findById(Long id) {
        return attendanceRepository.findById(id).get();
    }

    public Attendance findByDate(LocalDate date) {return attendanceRepository.findByDate(date); }

    public Attendance save(Attendance attendance) {
//        System.out.println(attendance.getDate()+" "+attendance.getStatus()+" "+attendance.getMember());
        return attendanceRepository.save(attendance);
    }

    public void delete(Long id) {
        attendanceRepository.deleteById(id);
    }
}
