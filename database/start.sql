show databases;


--데이터 베이스 생성하는 명령어
CREATE DATABASE sesac_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

--데이터 베이스 선택하는 명령어 
use sesac_test;

--테이블을 생성하는 명령어
create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

-- 만들어진 테이블에
--1)컬럼을 추가하는 명령어
ALTER TABLE user ADD gender enum('여자', '남자') not null;
--2)컬럼을 삭제하는 명렁어. 어떤 table에서 삭제할건지도 지정해주어야 한다.
ALTER TABLE user drop column age;
--3)컬럼을 수정하는 명령어
alter table user modify gender varchar(2) not null;


-- 테이블을 삭제하는 명렁어
drop table user;

-- ddl 실습
create table member (
	id varchar(20) primary key not null,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

alter table member modify id varchar(10);
alter table member drop column age;
alter table member add interset varchar(100);

desc member;


select * from user;