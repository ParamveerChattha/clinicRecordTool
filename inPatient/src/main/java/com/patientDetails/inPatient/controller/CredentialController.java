package com.patientDetails.inPatient.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.patientDetails.inPatient.loginCheck.LoginCheck;
import com.patientDetails.inPatient.repository.ApplicationUserRepository;

@RestController
@RequestMapping("/users")
public class CredentialController {
	
	private LoginCheck loginCheck;
	private ApplicationUserRepository applicationUserRepository;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	public void UserController(ApplicationUserRepository applicationUserRepository,BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.applicationUserRepository = applicationUserRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
		return;
		
	}
	
	@PostMapping("/signup")
	public ResponseEntity<String> signUpCredentials(@RequestBody String uid,Number mobNumber, String password){
		
		loginCheck.signupCredentials(uid, mobNumber, bCryptPasswordEncoder.encode(password));
		applicationUserRepository.save(uid,mobNumber,password);
		return ResponseEntity.ok("");
		
	}
	
	

	@PostMapping("/login")
	public ResponseEntity<String> checkCredentials(@RequestBody String uid, String password) {
		
		loginCheck.checkCredentials(uid, password);
		return ResponseEntity.ok("");
		}
	@RequestMapping(value = "/newuser/login", method  = RequestMethod.POST)
		public ResponseEntity<String> createCredentials(String uid, String password) {
			loginCheck.createCredentials(uid, password);
		return ResponseEntity.ok("");
		}
	@RequestMapping(value = "/changepwd", method = RequestMethod.POST)
	public ResponseEntity<String> changePassword(String uid, String oldPswd, String newPswd) {
		loginCheck.changePassword(uid, oldPswd, newPswd);
		return ResponseEntity.ok("");
		}
	@RequestMapping(value = "/forgotpasword", method = RequestMethod.POST)
	public ResponseEntity<String> forgotPassword(String uid, int number, Date dob) {
		loginCheck.forgotPassword(uid, number, dob);
		return ResponseEntity.ok("");
		}
	}