package com.healthJunction.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthJunction.dto.MedicineDetailsDto;
import com.healthJunction.entities.MedicineDetails;
@Repository
public interface MedicineDetailsRepository extends JpaRepository<MedicineDetails, Integer> {

	@Query("SELECT NEW com.healthJunction.dto.MedicineDetailsDto(e.name as name, e.dosage as dosage, e.schedule as schedule, e.reminders as reminders, e.user.loginId as user)FROM MedicineDetails e LEFT JOIN e.user u WHERE e.user.loginId = ?1")
	List<MedicineDetailsDto> getAllMedicineDetails(String id);
	
	//@Query("SELECT NEW com.healthJunction.dto.HealthDataDto(e.date as date, e.steps as steps, e.heartRate as heartRate, e.bloodPressure as bloodPressure, e.user.loginId as user) FROM HealthData e LEFT JOIN e.user u WHERE e.user.loginId = ?1")
}
