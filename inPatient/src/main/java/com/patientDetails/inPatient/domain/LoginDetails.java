package com.patientDetails.inPatient.domain;

import java.util.Date;

public class LoginDetails {
	
	private String uid;
	private String password;
	private Number mobNum;
	private String oldPassword;
	private Date dob;
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Number getMobNum() {
		return mobNum;
	}
	public void setMobNum(Number mobNum) {
		this.mobNum = mobNum;
	}
	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	private String newPassword;
	

}
