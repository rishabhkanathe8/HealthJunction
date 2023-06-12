package com.healthJunction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthJunction.dto.HealthDataDto;
import com.healthJunction.service.HealthDataService;


@RestController
@RequestMapping("/healthdata")
@CrossOrigin(origins = "http://localhost:3000")
public class HealthDataController {

	@Autowired
	private HealthDataService healthDataService;

	@PostMapping("/add")
	public ResponseEntity<Void> addHealthData(@RequestBody HealthDataDto healthDataDto) {
		healthDataService.addExercise(healthDataDto);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("/list/{loginId}")
	public ResponseEntity<List<HealthDataDto>> getAll(@PathVariable("loginId") String loginId) {
		List<HealthDataDto> list = healthDataService.getAllhealthData(loginId);
		if (list != null) {
			return new ResponseEntity<>(list, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

}
