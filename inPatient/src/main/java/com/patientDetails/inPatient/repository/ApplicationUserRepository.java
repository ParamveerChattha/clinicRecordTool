package com.patientDetails.inPatient.repository;

import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.patientDetails.inPatient.domain.LoginDetails;

public interface ApplicationUserRepository extends JpaRepository<LoginDetails, Long>{

	default LoginDetails findByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	void save(String uid, Number mobNumber, String password);
	
	

}
