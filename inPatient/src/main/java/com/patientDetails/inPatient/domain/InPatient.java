package com.patientDetails.inPatient.domain;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;

@Component
public class InPatient {
	@JsonFormat(pattern = "DD-MM-YYYY")
	private Date inDate = new Date();
	private String name;
	@JsonFormat(pattern = "DD-MM-YYYY")
	private Date dob;
	private String location;
	private String email;
	private String patientIllness;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPatientIllness() {
		return patientIllness;
	}
	public void setPatientIllness(String patientIllness) {
		this.patientIllness = patientIllness;
	}
	
	
}
