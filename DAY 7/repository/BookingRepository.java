package com.java.event.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.java.event.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, String> {
    
}
