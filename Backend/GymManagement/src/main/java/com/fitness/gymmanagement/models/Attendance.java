package com.fitness.gymmanagement.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fitness.gymmanagement.models.enums.AttendanceStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="Attendance")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private long id;

    @JsonProperty("member")
    @ManyToOne
    @JoinColumn(name="member_id", nullable=false)
    private Member member;

    @JsonProperty("date")
    @Column(name="date", nullable=false)
    private LocalDate date;

    @JsonProperty("status")
    @Enumerated(EnumType.STRING)
    @Column(name="status", nullable=false)
    private AttendanceStatus status;
    
    public long getId() {
        return id;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public AttendanceStatus getStatus() {
        return status;
    }

    public void setStatus(AttendanceStatus status) {
        this.status = status;
    }
}
