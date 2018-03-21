package com.patientDetails.inPatient.service;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.patientDetails.inPatient.config.SpringMongoConfig;
import com.patientDetails.inPatient.domain.InPatient;
import com.patientDetails.inPatient.repository.Repository;

@Service
public class InPatientServiceImpl implements InPatientService {
	
	ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringMongoConfig.class);
	MongoOperations mongoOperation = (MongoOperations) ctx.getBean("mongoTemplate");
	@Autowired
		MongoTemplate mongoTemplate;
	@Autowired
		Repository repository;


	public InPatient addPatient(InPatient inPatient) {
			System.out.println("dob is " + inPatient.getDob());
			
		return repository.save(inPatient);
	}
	
	public List<InPatient> findPatient(String name)
	{
		Query query = new Query();
			query.addCriteria(Criteria.where("name").is(name));
	//		System.out.println(query);
		List<InPatient> patients = mongoTemplate.find(query, InPatient.class);
	//	System.out.println(patients);
			return patients;
	}
	public List<InPatient> findPatient(String name, String dob)
	{
		//System.out.println(dob.getClass().getName());
		//DateFormat dateFormatter =  new SimpleDateFormat("YYYY-MM-DD");
		
	//	dob=dateFormatter.format(dob);
	//	System.out.println(dob.getClass().getName());
		System.out.println("date is " + dob);
		Query query = new Query();
			query.addCriteria(Criteria.where("name").is(name)
					.andOperator(Criteria.where("dob").is(dob)));
		//System.out.println(query + " " + dob + " " + name);
		System.out.println("this is " + dob);
		System.out.println(dob.getClass().getName());
		List<InPatient> patients = mongoTemplate.find(query, InPatient.class);
		return patients;
	}
	
	
}
