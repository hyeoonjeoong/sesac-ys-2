show databases;
use sesac_practice;

create table visitor (
id int not null primary key auto_increment,
username varchar(10) not null,
comment mediumtext
);

insert into visitor (username, comment) values ('홍길동', '내가 왔다.');
insert into visitor (username, comment) values ('이찬혁', '으라차차.');

select * from visitor;

drop user 'user'@'localhost';
flush privileges;

CREATE USER 'user'@'%' identified by 'qowlwl223!';
grant all privileges on *.* to 'user'@'%' with grant option;
flush privileges;

alter user 'user'@'%' identified with mysql_native_password by 'qowlwl223!';


select host, user from mysql.user;
delete from user where user='user'and host='localhost';
use mysql;
select * from user;
SELECT user,authentication_string,plugin,host FROM mysql.user; 

DROP USER `user`;