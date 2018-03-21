package com.patientDetails.inPatient.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.patientDetails.inPatient.domain.InPatient;
import com.patientDetails.inPatient.service.InPatientService;

@RestController
public class PatientController {
	@Autowired
		private InPatientService inPatientService;
	@Autowired
		InPatient inPatient;
	
	@RequestMapping(value= "/patientDetails", method = RequestMethod.POST)
		public ResponseEntity<String> addQuestion(@RequestBody InPatient inPatient){
		inPatientService.addPatient(inPatient); 
		return ResponseEntity.ok("Patient Details Saved");
		}
	@RequestMapping(value= "/find/{name}", method= RequestMethod.GET)
		public ResponseEntity<List<InPatient>> findPatient(@PathVariable String name){
		return ResponseEntity.ok(inPatientService.findPatient(name));
	}
	
	@RequestMapping(value = "/find/{name}/{dob}", method =  RequestMethod.GET)
		public ResponseEntity<List<InPatient>> findPatient(@PathVariable String name,  @PathVariable String dob ) throws ParseException{
		//Date dobConverted = new SimpleDateFormat("YYYY-MM-DD").parse(dob);
		//System.out.println(dobConverted.getClass().getName());
		return ResponseEntity.ok(inPatientService.findPatient(name, dob));
		}

}
