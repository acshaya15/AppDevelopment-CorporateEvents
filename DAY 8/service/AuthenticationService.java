package com.java.event.service;


import com.java.event.dto.Request.ForgetPasswordRequest;
import com.java.event.dto.Request.LoginRequest;
import com.java.event.dto.Request.RegisterRequest;
import com.java.event.dto.Response.BasicResponse;
import com.java.event.dto.Response.LoginResponse;

public interface AuthenticationService {
    
    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgetPasswordRequest forgetPasswordRequest);

}
