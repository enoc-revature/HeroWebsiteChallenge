package com.revature.HeroWebsiteChallenge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.HeroWebsiteChallenge.pojo.Hero;
import com.revature.HeroWebsiteChallenge.service.SuperHumanService;

@RestController
public class SuperHumanController {
	private SuperHumanService shs;
	
	@Autowired
	public void setShs(SuperHumanService shs) {
		this.shs = shs;
	}
	
	@GetMapping("/super-human")
	public List<Hero> getHeroes(){
		return shs.getHeroes();
	}
}
