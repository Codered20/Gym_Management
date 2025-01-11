package com.fitness.gymmanagement.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fitness.gymmanagement.models.enums.MembershipType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Members")
//@Getter
//@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private long id;

    @JsonProperty("age")
    @Column(name = "age", nullable = false)
    private int age;

    @JsonProperty("type")
    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private MembershipType membershipType;

    @JsonProperty("contact")
    @Column(name = "contact_info", nullable = false, unique = true)
    private String contact;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public MembershipType getMembershipType() {
        return membershipType;
    }

    public void setMembershipType(MembershipType membershipType) {
        this.membershipType = membershipType;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
}
