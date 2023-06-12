package com.healthJunction.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class MedicineDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int medicine_id;
	
	private String name;
	
	private String dosage;

	private String schedule;

	private String reminders;

	@ManyToOne
	@JoinColumn(name = "loginId")
	private User user;
}
