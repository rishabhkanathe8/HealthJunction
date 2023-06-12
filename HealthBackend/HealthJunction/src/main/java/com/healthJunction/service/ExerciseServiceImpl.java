package com.healthJunction.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthJunction.dto.ExerciseAddDto;
import com.healthJunction.entities.Exercise;
import com.healthJunction.entities.User;
import com.healthJunction.repository.ExerciseRepository;

@Service
@Transactional
public class ExerciseServiceImpl implements ExerciseService {

	@Autowired
	UserService userService;

	@Autowired
	ExerciseRepository exerciseRepository;

	@Override
	public void addExercise(ExerciseAddDto exerciseAddDto) {
		System.out.println("/n/n/n");
		System.out.println(exerciseAddDto.getDefficultyLevel());
		System.out.println("/n/n/n");
		Exercise newExercise = new Exercise();
		User user = exerciseAddDto.getLoginId() != null ? userService.getUser(exerciseAddDto.getLoginId()) : null;
		newExercise.setUser(user);
		newExercise.setDefficultyLevel(exerciseAddDto.getDefficultyLevel());
		newExercise.setDescription(exerciseAddDto.getDescription());
		newExercise.setName(exerciseAddDto.getName());
		exerciseRepository.save(newExercise);

	}

	@Override
	public void deleteExercise(String id) {
		// TODO Auto-generated method stub

	}

	@Override
	public Exercise updateExercise(String id, Exercise exercise) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ExerciseAddDto> getAllExercisesByLoginId(String loginId) {
		List<ExerciseAddDto> list = exerciseRepository.getAllExercisesByLoginId(loginId);
		return list;
	}

}