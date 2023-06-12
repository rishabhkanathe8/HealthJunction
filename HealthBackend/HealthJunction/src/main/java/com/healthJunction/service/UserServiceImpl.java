package com.healthJunction.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthJunction.dto.AuthDto;
import com.healthJunction.entities.User;
import com.healthJunction.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User loginUSer(AuthDto authrequest) {
		return userRepository.loginValidation(authrequest.getLoginId(), authrequest.getPassword());
		
	}

	@Override
	public User addUser(User user) {

		return userRepository.save(user);
	}

	@Override
	public void deleteUser(String id) {
		userRepository.deleteById(id);

	}

	@Override
	public User getUser(String id) {

		return userRepository.findById(id).orElse(null);
	}

	@Override
	public User updateUser(String id, User user) {
		User existingUser = userRepository.findById(id).orElse(null);
		if (existingUser != null) {
			existingUser.setFirstName(user.getFirstName());
			existingUser.setLastName(user.getLastName());
			existingUser.setPassword(user.getPassword());
			existingUser.setAge(user.getAge());

			return userRepository.save(existingUser);
		} else {
			return null;
		}
	}

}
