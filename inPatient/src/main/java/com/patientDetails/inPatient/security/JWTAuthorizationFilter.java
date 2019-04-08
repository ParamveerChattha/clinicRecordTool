package com.patientDetails.inPatient.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Jwts;


public class JWTAuthorizationFilter extends BasicAuthenticationFilter {
		SecurityConstants securityConstants;

	public JWTAuthorizationFilter(AuthenticationManager authenitcationManager) {
		super(authenitcationManager);
	}
	
	protected void doFilterInternal(HttpServletRequest req,
	HttpServletResponse res, FilterChain chain) throws IOException, ServletException {
		String header = req.getHeader(securityConstants.HEADER_STRING);
		
		if(header == null || !header.startsWith(securityConstants.TOKEN_PREFIX)) {
			chain.doFilter(req, res);
				return;
		}
		UsernamePasswordAuthenticationToken authentication = getAuthentication(req);
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		chain.doFilter(req, res);
		
		
	}
	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest req) {
			String token = req.getHeader(securityConstants.HEADER_STRING);
		if(token != null) {
			String user = Jwts.parser()
					.setSigningKey(securityConstants.SECRET)
					.parseClaimsJws(token.replace(securityConstants.TOKEN_PREFIX,""))
					.getBody()
					.getSubject();
		if(user != null) {
			return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
		}
		return null;
	
	}
		return null;
	
}
}
