package com.patientDetails.inPatient.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.patientDetails.inPatient.domain.LoginDetails;
public interface ApplicationUserRepository extends JpaRepository<LoginDetails, Long>{
	
	LoginDetails findByUsername(String username);

	

	void save(String uid, Number mobNumber, String password);
	
	

}
