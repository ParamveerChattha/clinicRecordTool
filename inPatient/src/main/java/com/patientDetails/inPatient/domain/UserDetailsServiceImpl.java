package com.patientDetails.inPatient.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.patientDetails.inPatient.repository.ApplicationUserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

		private ApplicationUserRepository appicationUserRepository;
	public UserDetailsServiceImpl(ApplicationUserRepository appicationUserRepository) {
		this.appicationUserRepository = appicationUserRepository;
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		LoginDetails loginDetails = ApplicationUserRepository.findByUsername(username);
		
	if(loginDetails == null) {
		throw new UsernameNotFoundException(username);
	}
	
	return new User(loginDetails.getUid() , loginDetails.getPassword(), emptyList());
	}

}
