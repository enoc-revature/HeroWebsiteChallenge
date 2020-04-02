package com.revature.HeroWebsiteChallenge.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="superhuman")
public class Hero {

	@Id
	@Column
	public String alias;

	@Column
	public String firstName;
	
	@Column
	public String lastName;
	
}
