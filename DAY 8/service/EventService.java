package com.java.event.service;

import com.java.event.dto.Request.EventRequest;
import com.java.event.dto.Response.BasicResponse;
import com.java.event.model.Event;

public interface EventService {

	BasicResponse<String> postEvent(EventRequest eventRequest);

    BasicResponse<Event> updateEvent(EventRequest eventRequest);

    BasicResponse<Event> getEvents();

    BasicResponse<String> deleteEvent(EventRequest eventRequest);

    


    
}
