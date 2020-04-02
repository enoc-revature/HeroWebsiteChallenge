drop table if exists superhuman;
create table superhuman(
	alias varchar primary key,
	firstName varchar,
	lastName varchar,
	originStory text,
	align_id foreign key alignment(align_id),
	team_id foreign key super_team(team_id)
);


-- Enumeration Table
drop table if exists alignment;
create table alignment(
	alias varchar;
	kind varchar primary key;

);


drop table if exists super_team;
create table super_team(
	team_id serial primary key,
	team_name varchar,
	alias varchar foreign key superhuman(alias),
	align_id numeric foreign key alignment(align_id)
);