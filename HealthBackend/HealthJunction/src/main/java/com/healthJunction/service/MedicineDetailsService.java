package com.healthJunction.service;

import java.util.List;

import com.healthJunction.dto.MedicineDetailsDto;

public interface MedicineDetailsService {

	public void addMedicineDetails(MedicineDetailsDto MedicineDetailsDto);

	public List<MedicineDetailsDto> getAllMedicineDetailsDto(String id);
}
