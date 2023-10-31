//테이블의 구조를 정의한다.
//orm은 객체와 db의 table을 매핑하는 기술을 의미한다.
//sequelize를 이용해서 table의 구조를 정의할 필요가 있다.

function Visitor(sequelize, DataTypes) {
  //sequelize객체의 define메소드를 이용해서 모델(테이블)을 정의한다.
  //define은 기본적으로 3개의 인자를 받는다.
  return sequelize.define(
    "visitor", //첫번째 인자 테이블 이륾
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //true가 기본값이다.
        primaryKey: true, //false가 기본값이다.
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(10),
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    }, //컬럼을 정의한다. 실제 컬럼의 이름을 적어야한다.
    {
      tableName: "visitor",
      freezeTableName: true, //테이블네임을 고정시키겠다.
      //시퀼라이저에서 간혹 단수로 지정해둔 테이블 이름을 복수로 변경시키는 경우가 있다.
      timestamps: false,
      //insert , update시에 그 시간을 자동으로 저장하겠다.
    }
  );
}

module.exports = Visitor;
