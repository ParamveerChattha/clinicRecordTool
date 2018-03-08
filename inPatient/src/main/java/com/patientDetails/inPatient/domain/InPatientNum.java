package com.patientDetails.inPatient.domain;

import java.util.List;

public class InPatientNum {
	private Number mobNum;
	private List<InPatient> patientdetails;
	public Number getMobNum() {
		return mobNum;
	}
	public InPatientNum(Number mobNum, List<InPatient> patientdetails) {
		super();
		this.mobNum = mobNum;
		this.patientdetails = patientdetails;
	}
	public void setMobNum(Number mobNum) {
		this.mobNum = mobNum;
	}
	public List<InPatient> getPatientdetails() {
		return patientdetails;
	}
	public void setPatientdetails(List<InPatient> patientdetails) {
		this.patientdetails = patientdetails;
	}
	
}
