package com.revature.HeroWebsiteChallenge.service;

import org.springframework.stereotype.Service;

import com.revature.HeroWebsiteChallenge.Repo.SuperHumanRepo;

@Service
public class SuperHumanService {
	
	@Autowired
	public SuperHumanRepo shr;
	
	public List<Hero> getHeroes(){
		return shr;
	}

}
