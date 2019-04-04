package com.patientDetails.inPatient.domain;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;
// Bio-data of patient
@Component
public class InPatient {
	@JsonFormat(pattern = "DD-MM-YYYY")
	private Date inDate = new Date();
	private String firstName;
	private String lastName;
	@JsonFormat(pattern = "DD-MM-YYYY")
	private String dob;
	private String address1;
	private String address2;
	private String email;
	private Number phoneNumber;
	private String patientIllness;
	public Date getInDate() {
		return inDate;
	}
	public void setInDate(Date inDate) {
		this.inDate = inDate;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Number getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(Number phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getPatientIllness() {
		return patientIllness;
	}
	public void setPatientIllness(String patientIllness) {
		this.patientIllness = patientIllness;
	}
		
	
}
