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