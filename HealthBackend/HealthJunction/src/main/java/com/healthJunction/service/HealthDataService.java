package com.healthJunction.service;

import java.util.List;

import com.healthJunction.dto.HealthDataDto;

public interface HealthDataService {

	public void addExercise(HealthDataDto healthDataDto);

	public void deletehealthData(int id);

	public HealthDataDto updatehealthData(int id, HealthDataDto healthDataDto);

	public List<HealthDataDto> getAllhealthData(String id);
}
