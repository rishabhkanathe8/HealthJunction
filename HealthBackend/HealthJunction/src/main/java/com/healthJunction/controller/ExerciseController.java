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

import com.healthJunction.dto.ExerciseAddDto;
import com.healthJunction.service.ExerciseService;

@RestController
@RequestMapping("/exercise")
@CrossOrigin(origins = "http://localhost:3000")
public class ExerciseController {

	@Autowired
	ExerciseService exerciseService;

	@PostMapping("/add")
	public ResponseEntity<Void> addExercise(@RequestBody ExerciseAddDto exerciseAddDto) {
		System.out.println("\n\n");
		System.out.println("\n\n");
		System.out.println(exerciseAddDto.getLoginId()+"here ");
		System.out.println("\n\n");
		exerciseService.addExercise(exerciseAddDto);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}


	@GetMapping("/list/{loginId}")
	public ResponseEntity<List<ExerciseAddDto>> getAllExercisesByLoginId(@PathVariable("loginId") String loginId) {

		List<ExerciseAddDto> list = exerciseService.getAllExercisesByLoginId(loginId);
		if (list.size() > 0) {
			return new ResponseEntity<>(list, HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

}
