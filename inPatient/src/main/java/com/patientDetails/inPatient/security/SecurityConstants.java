package com.patientDetails.inPatient.security;

public class SecurityConstants {
	public final String SECRET = "SecretKeyToGenerateJWTs";
	public final long EXPIRATION_TIME = 864_000_000;
	public final String TOKEN_PREFIX = "Bearer ";
	public final String  HEADER_STRING = "Authorization";
	public final String SIGN_UP_URL = "/signup";
}
