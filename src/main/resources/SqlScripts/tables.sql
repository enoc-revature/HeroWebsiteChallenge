drop if exists superhumans;
create table superhumans(
	id serial primary key,
	firstName varchar,
	lastName varchar,
	alias,
	originStory text
);


-- Enumeration Table
drop if exists alignment;
create table alignment(

);


-- Junction Table
drop if exists super_team;
create table super_team(
	
);