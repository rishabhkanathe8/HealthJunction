package com.healthJunction.service;

import com.healthJunction.dto.AuthDto;
import com.healthJunction.entities.User;

public interface UserService {
	
	//public User loginUser(AuthRequest authRequest);

	public User loginUSer(AuthDto authrequest);

	public User addUser(User user);

	public void deleteUser(String id);

	public User getUser(String id);

	public User updateUser(String id, User user);
	
	

}
