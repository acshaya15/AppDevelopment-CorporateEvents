package com.java.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.event.model.Venue;

public interface VenueRepository extends JpaRepository<Venue, String> {

    
} 