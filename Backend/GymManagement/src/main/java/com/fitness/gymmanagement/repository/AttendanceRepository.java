package com.fitness.gymmanagement.repository;

import com.fitness.gymmanagement.models.Attendance;
import com.fitness.gymmanagement.models.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {

    Attendance findByMember(Member member);
}
