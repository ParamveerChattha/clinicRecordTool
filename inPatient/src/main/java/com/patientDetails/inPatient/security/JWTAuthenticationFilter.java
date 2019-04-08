package com.patientDetails.inPatient.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties.Jwt;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.patientDetails.inPatient.domain.LoginDetails;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private SecurityConstants securityConstants;
	
	
	public void JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}
	
	public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res) throws AuthenticationException {
		try {
			LoginDetails creds = new ObjectMapper().readValue(req.getInputStream() , LoginDetails.class);
			return authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
							creds.getUid(),
							creds.getPassword(),
							new ArrayList<>())
					);
		}
		catch(IOException e){
			throw new RuntimeException(e);	
		}
	}
	
	public void SuccessfulAuthentication(HttpServletRequest req, 
										HttpServletResponse res, 
										FilterChain chain, 
										Authentication auth) throws IOException, ServletException {
		String token = Jwts.builder()
				.setSubject(((User) auth.getPrincipal()).getUsername())
				.setExpiration(new Date(System.currentTimeMillis() + securityConstants.EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS512, securityConstants.SECRET)
				.compact();
				res.addHeader(securityConstants.HEADER_STRING, securityConstants.TOKEN_PREFIX + token);
	}
}

