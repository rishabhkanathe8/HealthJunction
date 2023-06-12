package com.healthJunction.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class MedicineDetailsDto {

	private String name;
	
	private String dosage;

	private String schedule;

	private String reminders;
	
	private String user;
}
