package com.revature.HeroWebsiteChallenge;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.HeroWebsiteChallenge.pojo.Hero;
import com.revature.HeroWebsiteChallenge.service.SuperHumanService;

@SpringBootTest
class HeroWebsiteChallengeApplicationTests {
	public Hero hero = new Hero();
	public Hero heroFetched = new Hero();
	public SuperHumanService shs;

	@Test
	void contextLoads() {
	}
	
	@Test
	void nullHero() {
		List<Hero> heroList = shs.getHeroes();
		assertNotNull(heroList);
	}

	@Test
	void fetchHero() {
		hero.setAlias("heroName");
		hero.setFirstName("first");
		hero.setLastName("last");
		heroFetched = shs.getHeroes().get(0);
		System.out.println(hero.toString());
		assertTrue(hero.equals(heroFetched));
	}
	
}
