package com.healthJunction.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthJunction.dto.HealthDataDto;
import com.healthJunction.entities.HealthData;
import com.healthJunction.entities.User;
import com.healthJunction.repository.HealthDataRepository;

@Service
@Transactional
public class HealthDataServiceImpl implements HealthDataService {

	@Autowired
	UserService userService;

	@Autowired
	HealthDataRepository healthDataRepository;
	
	
	@Override
	public void addExercise(HealthDataDto healthDataDto) {
		HealthData newHealthData = new HealthData();
		User user = healthDataDto.getUser() != null ? userService.getUser(healthDataDto.getUser()) : null;
		newHealthData.setUser(user);
		newHealthData.setBloodPressure(healthDataDto.getBloodPressure());
		newHealthData.setDate(healthDataDto.getDate());
		newHealthData.setHeartRate(healthDataDto.getHeartRate());
		newHealthData.setSteps(healthDataDto.getSteps());
		healthDataRepository.save(newHealthData);

	}

	@Override
	public void deletehealthData(int id) {
		// TODO Auto-generated method stub

	}

	@Override
	public HealthDataDto updatehealthData(int id, HealthDataDto healthDataDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<HealthDataDto> getAllhealthData(String id) {
		List<HealthDataDto> list= healthDataRepository.getAllHealthData(id);
		return list;
	}

}
