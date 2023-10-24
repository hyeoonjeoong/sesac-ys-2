show databases;
use sesac_test;

create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

-- 컬럼을 추가하는 명령어
ALTER TABLE user ADD gender enum('여자', '남자') not null;
-- 컬럼을 삭제하는 명렁어. 어떤 table에서 삭제할건지도 지정해주어야 한다.
ALTER TABLE user drop column age;
-- 컬럼을 수정하는 명령어
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


-- ---------------------------------------insert문 (데이터를 추가하는 명령어)
insert into user (id, password) values ('lily', '1234');
insert into user values ('lily2', '1234', 99);

-- ---------------------------------------select문 (데이터를 조회하는 명령어)
-- select [속성...] from [테이블이름] where [조건은 선택. 넣고싶으면 넣는거.]

-- *은 모든 속성을 다 보여주겠다는거.
-- user라는 테이블의 모든 값을 조회하겠다. 왼쪽 메뉴에서 아이콘누른거랑 똑같이 보여지는거.
select * from user;
-- user 테이블의 id, age속성을 조회하겠다. 콤마로 구분 가능.
select id, age from user;

CREATE TABLE customer
( 
custid CHAR(10) NOT NULL PRIMARY KEY,
custname VARCHAR(10) NOT NULL, 
addr CHAR(10) NOT NULL, 
phone CHAR(11), 
birth DATE
); 

CREATE TABLE orders
( 
orderid INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
custid CHAR(10) NOT NULL, 
prodname CHAR(6) NOT NULL, 
price INT NOT NULL, 
amount SMALLINT NOT NULL,
FOREIGN KEY (custid) REFERENCES customer(custid)
);

-- on delete cascade를 하면.. 관련된 데이터를 같이 삭제하겠다는 의미. 아래처럼 작성.
-- FOREIGN KEY (custid) REFERENCES customer(custid) on delete cascade


INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍지수', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');


-- ---------------------------------------select문
select * from customer;
-- custid가 bunny인 회원
select * from customer where custid='bunny';
-- custid가 bunny가 아닌 회원
select * from customer where custid !='bunny';
select * from customer where not custid='bunny';
-- birth가 2000-01-01 이후에 태어난 회원 조회
select * from customer where birth >= '2000-01-01';
-- birth가 2000-01-01 ~ 2005-01-01 사이에 태어난 회원 조회
select * from customer where birth between '2000-01-01' and '2005-01-01';
-- addr이 '대한민국 서울'이거나 '미국 로스앤젤레스'둘 중 하나라면 조회하겠다.
select * from customer where addr in('대한민국 서울', '미국 로스앤젤레스');
-- like 비교문자열. 자주 쓰인다!
-- addr가 대한민국을 포함한 회원 조회
-- %는 앞 뒤로 아무 문자가 있어도 되고 없어도 된다는의미. 즉 대한민국을 포함하기만 하면 다조회하겠다는 의미.
select * from customer where addr like '%대한민국%';
-- 언더바 2개. 앞에 2자리 뒤에 '수'가 들어오는 사람 조회. 총 3글자.
select * from customer where custname like '__수';
-- 혼합해서 사용도 가능하다. 앞에 글자는 아무거나 상관없다. 뒤에서 두번째 글자가 '해'여야 한다.
select * from customer where custname like '%해_';
-- is null 사용 예시
select * from customer where custname is null;
-- ---------------------------------------복합 조건
-- AND, OR, NOT 
select * from customer where addr like '%대한민국%' AND birth <= '2000-05-05';
select * from customer where addr like '%대한민국%' OR birth <= '2000-05-05';

-- customer을 기준으로 오름차순하겠다. 
select * from customer order by custname asc;

-- where과 order by 같이 쓰기. where이 앞에 와야 한다!
-- addr에 대한민국을 포함하고 잇는 회원 조회. custname기준으로 내림차순 정렬하여 보여주기.
-- 조회를 먼저 하고 정렬하고 보여주게 되는 것.
select * from customer where addr like '%대한민국%' order by custname desc;
-- limit. 위와 동일하게 하면서 첫번째 1명만 가져오겠다.
-- 참고로 이런 조건들을 같이 사용하려면 꼭 아래 순서대로 작성해줘야한다.
select * from customer where addr like '%대한민국%' order by custname desc limit 1;

-- ---------------------------------------update문
update customer set custname = '강해란' where custid = 'bunny';
select * from customer;
-- ---------------------------------------delete문
-- 근데 얘는 삭제 못한다. 오류 발생
-- wow123 값을 참조하고 있는 데이터가 있기 때문.  삭제하고싶으면 orders 에서 삭제하고 와야한다.
-- 그럼 참조하는 값이 없어져 삭제가 가능하게 된다. 
-- 이거에 대한 포린키 order테이블에 걸어뒀다.
delete from customer where custid = 'wow123';
-- 여기서 삭제하는건 가능하다.
delete from orders where custid = 'wow123';
select * from orders;

-- distinct 중복된 데이터 제거
select addr from customer;
select distinct addr from customer;

select * from orders;
-- orders테이블에존재하는 주문 개수를 알 수 있다.
-- count하기 . 여기서 *은 튜플이 전체 개수를 의미한다.
-- 괄호 안에는 * 아니면 속성을 입력한다.
select count(*) from orders;

-- orders 테이블에 존재하는 주문 개수. as로 이름 지정. 새로운 속성을 만들어 준 셈.
select count(*) as 'total_orders' from orders;

-- 속성값 자체가 null을 허용해서 누군가의 값에 null이 있다면 세지 않는다.
select count(prodname) from orders; 

-- 사람 별 주문 건수를 알고 싶을 때
-- group by를 같이 쓰게 되면 이게 같은 사람끼리 묶겠다. custid를 기준으로 개수를 세는 것.

-- select에서 group by를 쓸 때는, group by뒤에 쓴 속성과 집계함수로 새로 만든 속성만 출력하도록 해야한다. 
-- 다른 prodname 등등의 속성을 출력하지 않도록. select 구문에서 설정을 해주어야 한다.
select custid, count(*) as 'count' from orders group by custid;

-- 사람 별 몇 개의 상품을 주문했는 지. 사람 별로 구매한 상품의 개수
select * from orders; -- 기본 테이블 구조 확인해보고
select custid, sum(amount) as 'total_amount' from orders group by custid;

-- 기존에 있는 속성을 이용해 조건을 걸 때는 where을 쓰면 되는데
-- group by를 이용해 새롭게 생긴 속성에 대해 조건을 걸고 싶으면 having을 사용해야 한다. 
-- group by와 having은 같이 사용된다.

-- 사람별로 구매한 상품의 개수를 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회하겠다.
select custid, sum(amount) as 'total_amount' from orders group by custid having sum(amount) >= 5;
-- 사람별로 구매한 상품의 개수를 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회하겠다. 
-- custid가 bunny가 아닌 사람. 이라는 where조건 함께 사용 할 경우.
select custid, sum(amount) as 'total_amount' from orders where custid != 'bunny' group by custid having sum(amount) >= 5;
-- 사람별로 결제한 금액을 알고 싶다면
select * from orders; -- 기본 테이블 구조 확인해보고
select custid, sum(amount*price) as 'total_price' from orders group by custid;


-- -----------------------join
-- customer 테이블과 odrers테이블을 inner join 한 것.
-- 주문별로 배송지를 알고 싶어서.
-- customer에서는 addr값만 가져올거고
-- odrers에서는 전체 값을 가져오겠다.
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid;
-- 원래는 배송지 없다. 위에서 join해서 값 가져온 것.
select * from orders;




INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

select * from orders;


-- ---------------------------------------실습 create문
CREATE TABLE user02( 
id varchar(10) not null primary key,
pw varchar(20) not null,
name varchar(5) not null,
gender enum('F', 'M', '') default '',
birthday DATE not null,
age int(3) not null default 0
);

desc user02;
select * from user02;
-- ---------------------------------------실습 insert문

INSERT INTO user02 VALUES('hong1234','8o4bkg','홍길동','M','1990-01-31',33);
INSERT INTO user02 VALUES('sexysung','87awjkdf','성춘향','F','1992-03-31',31);
INSERT INTO user02 VALUES('power70','qxur8sda','변사또','M','1970-05-02',53);
INSERT INTO user02 VALUES('hanjo','jk48fn4','한조','M','1984-10-18',39);
INSERT INTO user02 VALUES('widowmaker','38ewifh3','위도우','F','1976-06-27',47);
INSERT INTO user02 VALUES('dvadva','k3f3ah','송하나','F','2001-06-03',22);
INSERT INTO user02 VALUES('jungkrat','4ifha7f','정크랫','M','1999-11-11',24);


select * from user02;
-- ---------------------------------------실습 select문
select * from user02 order by birthday asc;
select * from user02 where gender like 'M' order by name desc;
select id, name from user02 where birthday between '1990-01-01' and '1990-12-31' ;
select * from user02 where birthday like '%-06-%' order by birthday asc;
select * from user02 where gender like 'M' and birthday between '1970-01-01' and '1970-12-31';
select * from user02 where age order by age desc limit 3;
select * from user02 where age between 25 and 50;
update user02 set pw = '12345678' where id = 'hong1234';
delete from user02 where id = 'jungkrat';










