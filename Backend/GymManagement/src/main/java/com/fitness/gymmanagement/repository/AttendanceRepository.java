package com.fitness.gymmanagement.repository;

import com.fitness.gymmanagement.models.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {

    Attendance findByDate(LocalDate date);
}
