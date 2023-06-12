package com.healthJunction.entities;

import java.time.LocalDate;

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
public class HealthData {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int helathDataId;

	
	private LocalDate date;
	
	private String steps;
	
	private String heartRate;
	
	private String bloodPressure;
	
	@ManyToOne
	@JoinColumn(name ="loginId")
	private User user;


}
