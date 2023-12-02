import React from "react";
import { useState } from "react";

const MapPrac = () => {
  const infoList = [
    { id: 1, name: "코디", email: "codi@dddd.com" },
    { id: 2, name: "이름이름", email: "dfdfdfdf@dddd.com" },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState(infoList);

  const addInfo = (e) => {
    const newInfoList = infoList.concat({
      id: infoList[infoList.length - 1].id + 1,
      name: name,
      email: email,
    });

    setInfo(newInfoList);
  };

  const deleteList = (id) => {
    const newInfoList = infoList.filter((value) => value.id != id);
    setInfo(newInfoList);
  };

  const pressEnter = (e) => {
    if (e.key == "Enter") {
      addInfo();
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        value={email}
        placeholder="이메일"
        onKeyDown={pressEnter}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={addInfo}>등록하기</button> <br />
      <select name="selectWriter" id="selectWriter">
        <option value="" disabled selected>
          작성자
        </option>
        <option value=""></option>
      </select>
      <input type="text" placeholder="검색어" />
      <button>검색하기</button>
      <table border={1}>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>

        {info.map((value) => {
          return (
            <tr
              key={value.id}
              onDoubleClick={() => {
                deleteList(value.id);
              }}
            >
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.email}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default MapPrac;
