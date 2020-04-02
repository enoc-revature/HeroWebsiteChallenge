package com.revature.HeroWebsiteChallenge.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.HeroWebsiteChallenge.pojo.Hero;

@Repository
public interface SuperHumanRepo extends JpaRepository<Hero, String>{
}
