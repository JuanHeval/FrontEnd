package com.demo.spring.service;

import java.util.List;

import com.demo.spring.security.model.User;

public interface UserService {

	User save(User user);

	List<User> findAll();

	User getUserByEmail(String email);

}
