package com.java.event.model;


import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "sp_booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String bookingId;

    private LocalDateTime submissionDate;
    private LocalDateTime eventDate;
    private Integer bookingStatus;
    private Integer headcount;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Venue venue;
 
    @ManyToOne
    private Event event;
 
    @OneToOne
    private Payment payment;


}