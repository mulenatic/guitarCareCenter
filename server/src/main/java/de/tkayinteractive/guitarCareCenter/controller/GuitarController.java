package de.tkayinteractive.guitarCareCenter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.tkayinteractive.guitarCareCenter.domain.Guitar;
import de.tkayinteractive.guitarCareCenter.service.GuitarService;

@RestController
public class GuitarController {
	
	@Autowired
	private GuitarService guitarService;
	
	@RequestMapping("/guitars")
	public List<Guitar> findAll() {
		return guitarService.findAll();		
	}

}
