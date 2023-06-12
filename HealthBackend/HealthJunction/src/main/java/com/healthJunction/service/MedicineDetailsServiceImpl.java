package com.healthJunction.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthJunction.dto.MedicineDetailsDto;
import com.healthJunction.entities.MedicineDetails;
import com.healthJunction.entities.User;
import com.healthJunction.repository.MedicineDetailsRepository;

@Service
@Transactional
public class MedicineDetailsServiceImpl implements MedicineDetailsService {

	@Autowired
	MedicineDetailsRepository medicineDetailsRepository;
	

	@Autowired
	UserService userService;
	
	@Override
	public void addMedicineDetails(MedicineDetailsDto medicineDetailsDto) {
		MedicineDetails newMedicineDetails = new MedicineDetails();
		User user = medicineDetailsDto.getUser() != null ? userService.getUser(medicineDetailsDto.getUser()) : null;
		newMedicineDetails.setUser(user);
		newMedicineDetails.setDosage(medicineDetailsDto.getDosage());
		newMedicineDetails.setName(medicineDetailsDto.getName());
		newMedicineDetails.setReminders(medicineDetailsDto.getReminders());
		newMedicineDetails.setSchedule(medicineDetailsDto.getSchedule());
		medicineDetailsRepository.save(newMedicineDetails);

	}

	@Override
	public List<MedicineDetailsDto> getAllMedicineDetailsDto(String id) {
		List<MedicineDetailsDto> list= medicineDetailsRepository.getAllMedicineDetails(id);
		return list;
	}

}
