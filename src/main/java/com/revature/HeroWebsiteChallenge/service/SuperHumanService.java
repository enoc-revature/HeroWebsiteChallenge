package com.revature.HeroWebsiteChallenge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.HeroWebsiteChallenge.Repo.SuperHumanRepo;
import com.revature.HeroWebsiteChallenge.pojo.Hero;

@Service
public class SuperHumanService {
	
	private SuperHumanRepo shr;
	
	@Autowired
	public void setSuperHumanRepo(SuperHumanRepo shr) {
		this.shr = shr;
	}
	
	public List<Hero> getHeroes(){
		System.out.println("getHeroes()");
		return shr.findAll();
	}

}
