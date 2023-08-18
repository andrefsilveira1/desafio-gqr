CREATE TABLE data (
	id int AUTO_INCREMENT primary key,
	depth float not null,
	c1 float not null,
	c2 float not null,
	c3 float not null,
	nc4 float not null,
	ic4 float not null,
	nc5 float not null,
	ic5 float not null,
	TotalGas float not null,
	submissionId int not null,
	createdAt timestamp default current_timestamp()
) ENGINE = INNODB;


CREATE TABLE submission (
	id int AUTO_INCREMENT primary key,
	name varchar(50) not null,
	createdAt timestamp default current_timestamp()
) ENGINE = INNODB;