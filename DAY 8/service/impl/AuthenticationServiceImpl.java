package com.java.event.service.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.java.event.dto.Request.ForgetPasswordRequest;
import com.java.event.dto.Request.LoginRequest;
import com.java.event.dto.Request.RegisterRequest;
import com.java.event.dto.Response.BasicResponse;
import com.java.event.dto.Response.LoginResponse;
import com.java.event.model.Token;
import com.java.event.model.User;
import com.java.event.repository.TokenRepository;
import com.java.event.repository.UserRepository;
import com.java.event.service.AuthenticationService;
import com.java.event.utils.Jwtutils;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final Jwtutils jwtUtils;
    private final TokenRepository tokenRepository;

    @SuppressWarnings("null")
    @Override
    public BasicResponse<String> register(RegisterRequest registerRequest) {
        Optional<User> isUserExists = userRepository.findByEmail(registerRequest.getEmail());

        if (isUserExists.isPresent()) {
            return BasicResponse.<String>builder().message("User already exists with email id"+registerRequest.getEmail())
            .data("").build();
        }

        var user = User.builder()
                   .email(registerRequest.getEmail())
                   .password(passwordEncoder
                   .encode(registerRequest.getPassword()))
                   .username(registerRequest.getUsername())
                   .build();

        userRepository.save(user);
        return BasicResponse.<String>builder().message("User Registered Successfully").data("").build();           
    }

    @Override
    public BasicResponse<LoginResponse> login(LoginRequest loginRequest) {
       authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
       var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
       Map<String, Object> claims = new HashMap<>();
       claims.put("role", user.getRole().toString());
       var accessToken = jwtUtils.generateToken(user);
       revokeAllUserToken(user);
       saveUserToken(accessToken, user);
       return BasicResponse.<LoginResponse>builder()
                           .message("User logged in successfully")
                           .data(LoginResponse.builder()
                            .message("User logged in successfully")
                            .accessToken(accessToken).build()
                            )
                           .build();
    }

    @SuppressWarnings("null")
    private void saveUserToken(String accessToken, User user){
        var token = Token.builder().token(accessToken).user(user).expired(false).revoked(false).build();
        tokenRepository.save(token);
    }

    private void revokeAllUserToken(User user){
        var validUserTokens = tokenRepository.findAllByUser_userIdAndRevokedFalseAndExpiredFalse(user.getUserId());
        if(validUserTokens.isEmpty()){
            return;
        }
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public BasicResponse<String> forgotPassword(ForgetPasswordRequest forgetPasswordRequest) {
       var user = userRepository.findByEmail(forgetPasswordRequest.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
       if(!passwordEncoder.matches(forgetPasswordRequest.getCurrentPassword(), user.getPassword())){
        return BasicResponse.<String>builder().message("Wrong password").data("").build();
       }
       if(!forgetPasswordRequest.getNewPassword().equals(forgetPasswordRequest.getConfirmPassword())){
        return BasicResponse.<String>builder().message("Password Mismatch").data("").build();
       }
       user.setPassword(passwordEncoder.encode(forgetPasswordRequest.getNewPassword()));
       userRepository.save(user);
       return BasicResponse.<String>builder().message("Password Updated successfully.").data("").build();
    }


}

