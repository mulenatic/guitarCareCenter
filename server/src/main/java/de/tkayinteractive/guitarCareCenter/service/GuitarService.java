package de.tkayinteractive.guitarCareCenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.tkayinteractive.guitarCareCenter.domain.Guitar;
import de.tkayinteractive.guitarCareCenter.repository.GuitarRepository;

@Service
public class GuitarService {
	
	@Autowired
	private GuitarRepository guitarRepository;
	
	public List<Guitar> findAll() {
		return guitarRepository.findAll();
	}

}
