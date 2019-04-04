package com.patientDetails.inPatient.loginCheck;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.patientDetails.inPatient.domain.LoginDetails;

public class LoginCheck {
	@Autowired
		LoginDetails loginDetails;
	public Map<String,String> credentials  = new HashMap<>();
	
	public void signupCredentials(String uid,Number mobile, String password) {
		loginDetails.setUid(uid);
		loginDetails.setPassword(password);
		loginDetails.setMobNum(mobile);
	}
	
	public void checkCredentials(String uid, String password) {
		
		loginDetails.setUid(uid);
		loginDetails.setPassword(password);
		
		
	}
	public void createCredentials(String uid, String pswd) {
		loginDetails.setUid(uid);
		loginDetails.setPassword(pswd);
		
		
	}
	public void changePassword(String uid, String oldPswd, String newPswd) {
		loginDetails.setUid(uid);
		loginDetails.setOldPassword(oldPswd);
		loginDetails.setNewPassword(newPswd);		
	}
	public void forgotPassword(String uid, int number, Date dob) {
		loginDetails.setUid(uid);
		loginDetails.setMobNum(number);
		loginDetails.setDob(dob);
	}
}
