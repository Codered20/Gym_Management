package com.fitness.gymmanagement.models;

import com.fitness.gymmanagement.models.enums.BodyPart;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="workout_plans")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class WorkoutPlans {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name="member_id", nullable=false)
    private Member member;

    @Enumerated(EnumType.STRING)
    @Column(name = "monday_plan")
    private BodyPart mondayPlan;

    @Enumerated(EnumType.STRING)
    @Column(name = "tuesday_plan")
    private BodyPart tuesdayPlan;

    @Enumerated(EnumType.STRING)
    @Column(name = "wednesday_plan")
    private BodyPart wednesdayPlan;

    @Enumerated(EnumType.STRING)
    @Column(name = "thursday_plan")
    private BodyPart thursdayPlan;

    @Enumerated(EnumType.STRING)
    @Column(name = "friday_plan")
    private BodyPart fridayPlan;

    @Enumerated(EnumType.STRING)
    @Column(name = "saturday_plan")
    private BodyPart saturdayPlan;

    @Enumerated(EnumType.STRING)
    @Column(name = "sunday_plan")
    private BodyPart sundayPlan;
}
