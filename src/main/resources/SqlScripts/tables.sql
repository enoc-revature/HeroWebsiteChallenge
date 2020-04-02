drop if exists superhuman;
create table superhuman(
	hero_id serial primary key,
	firstName varchar,
	lastName varchar,
	alias,
	originStory text,
	align_id foreign key alignment(align_id),
	team_id foreign key super_team(team_id)
);


-- Enumeration Table
drop if exists alignment;
create table alignment(
	align_id numeric primary key;
	kind varchar;

);


drop if exists super_team;
create table super_team(
	team_id serial primary key,
	team_name varchar,
	hero_id numeric foreign key superhuman(hero_id)
);