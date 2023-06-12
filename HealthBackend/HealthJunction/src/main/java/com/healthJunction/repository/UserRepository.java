package com.healthJunction.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthJunction.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	@Query("select a from User a where a.loginId = :loginId and a.password = :password")
	User loginValidation(String loginId, String password);

}
