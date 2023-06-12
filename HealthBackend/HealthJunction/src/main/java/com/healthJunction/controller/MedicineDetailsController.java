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

import com.healthJunction.dto.MedicineDetailsDto;
import com.healthJunction.service.MedicineDetailsService;

@RestController
@RequestMapping("/medicinedetails")
@CrossOrigin(origins = "http://localhost:3000")
public class MedicineDetailsController {

	@Autowired
	MedicineDetailsService medicineDetailsService;

	@PostMapping("/add")
	public ResponseEntity<Void> addHealthData(@RequestBody MedicineDetailsDto medicineDetailsDto) {

		medicineDetailsService.addMedicineDetails(medicineDetailsDto);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("/list/{loginId}")
	public ResponseEntity<List<MedicineDetailsDto>> getAll(@PathVariable("loginId") String loginId) {
		List<MedicineDetailsDto> list = medicineDetailsService.getAllMedicineDetailsDto(loginId);
		if (list != null) {
			return new ResponseEntity<>(list, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

}
