//model이 데이터 관련된곳이니까 여기서 table의 구조를 정의한다.
//sql에서 확인해보면 db가 생성되어 있다.

//sequelize는 orm이다.
//orm은 객체와 db의 table을 매핑하는 기술을 의미한다.
//npm install sequelize sequelize-cli mysql2 로 설치했음

//sequelize를 이용해서 table의 구조를 정의할 필요가 있다.
//sequelize객체의 define메소드를 이용해서 모델(테이블)을 정의한다.
//define메소드는 기본적으로 3개의 인자를 받는다.
//sequelize.define( "객체이름", 스키마 정의, 테이블 설정 )

//associate 는 모델에 있는 필드들의 타입을 정의하고, 각 모델간의 관계를 설정해준다.

function User(sequelize, DataTypes) {
  return sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //true가 기본값이다.
        primaryKey: true, //false가 기본값이다.
        autoIncrement: true,
      },
      password: {
        type: DataTypes.STRING(10),
      },
      name: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = User;
