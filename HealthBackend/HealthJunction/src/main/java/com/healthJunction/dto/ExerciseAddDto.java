package com.healthJunction.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString

@NoArgsConstructor
@AllArgsConstructor
public class ExerciseAddDto {
	 private String name;
	    private String description;
	    private String defficultyLevel;
	    private String loginId;

}
