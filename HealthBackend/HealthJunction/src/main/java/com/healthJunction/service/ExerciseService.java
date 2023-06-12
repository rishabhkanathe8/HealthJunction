package com.healthJunction.service;

import java.util.List;

import com.healthJunction.dto.ExerciseAddDto;
import com.healthJunction.entities.Exercise;

public interface ExerciseService {

	public void addExercise(ExerciseAddDto exerciseAddDto);

	public void deleteExercise(String id);


	public Exercise updateExercise(String id, Exercise exercise);
	
	 List<ExerciseAddDto> getAllExercisesByLoginId(String loginId);
	
}
