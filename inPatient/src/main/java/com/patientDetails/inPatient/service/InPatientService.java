package com.patientDetails.inPatient.service;

import java.util.Date;
import java.util.List;

import com.patientDetails.inPatient.domain.InPatient;


public interface InPatientService {
	
	
	public InPatient addPatient(InPatient inPatient);
	
	public List<InPatient> findPatient(String name);
	
	public List<InPatient> findPatient(String name, String dob);
	
}
