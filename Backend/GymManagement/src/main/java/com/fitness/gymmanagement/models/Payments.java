package com.fitness.gymmanagement.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.boot.json.JsonWriter;

import java.time.LocalDate;

@Entity
@Table(name="Payments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Payments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @ManyToOne
    @JoinColumn(name="member_id", nullable=false)
    private Member member;

    @Column(name="amount", nullable=false)
    private double amount;

    @Column(name="payment_Date", nullable = false)
    private LocalDate paymentDate;
}
