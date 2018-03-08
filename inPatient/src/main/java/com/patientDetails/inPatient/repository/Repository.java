package com.patientDetails.inPatient.repository;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.patientDetails.inPatient.domain.InPatient;

public interface Repository extends MongoRepository<InPatient,String> {

}
