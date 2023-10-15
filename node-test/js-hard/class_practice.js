//class 생성

class Zoo {
  constructor(name, animal) {
    this.name = name;
    this.animal = animal;
  }
  info() {
    console.log(`안녕 내이름은 ${this.name}, ${this.animal} 이지!`);
  }
}

const zoo1 = new Zoo("호돌이", "호랑이");
const zoo2 = new Zoo("보노보노", "해달");

console.log(zoo1.name, zoo2.animal);
zoo1.info();
zoo2.info();

//class 상속

class PandaWorld extends Zoo {
  constructor(name, animal, come) {
    super(name, animal);
    this.come = come;
  }
  here() {
    super.info();
    console.log(`동물원에는 ${this.come}에 오게 되었어.`);
  }
}

const zoo3 = new PandaWorld("푸바오", "판다", 2021);
console.log(zoo3.name);
zoo3.here();
