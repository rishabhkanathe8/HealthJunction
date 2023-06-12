package com.healthJunction.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.healthJunction.dto.HealthDataDto;
import com.healthJunction.entities.HealthData;

public interface HealthDataRepository extends JpaRepository<HealthData, Integer>{

//	@Query("SELECT NEW com.healthJunction.dto.HealthDataDto(e.date as date , e.steps as steps, e.heartRate as heartRate, e.bloodPressure as bloodPressure, e.loginId as user)FROM HealthData e left join e.User u  WHERE e.login_id = ?1")
	@Query("SELECT NEW com.healthJunction.dto.HealthDataDto(e.date as date, e.steps as steps, e.heartRate as heartRate, e.bloodPressure as bloodPressure, e.user.loginId as user) FROM HealthData e LEFT JOIN e.user u WHERE e.user.loginId = ?1")
	List<HealthDataDto> getAllHealthData(String id);
	
	
}
//@Query("select new com.toureasy.dto.TourDetailsDto(t.source as source,  a.firstName as firstName,  a.mobileNo as mobileNo) from Tour t left join t.agent a where t.source = ?1 and t.destination = ?2 ")