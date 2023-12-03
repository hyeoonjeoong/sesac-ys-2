import React, { useState } from "react";

const MapPrac02 = () => {
  const [list, setList] = useState([]);
  const [listId, SetListId] = useState(0);
  const [newWriter, setNewWriter] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const addList = () => {
    const newContent = {
      id: listId,
      writer: newWriter,
      title: newTitle,
    };
    const NewList = list.concat(newContent);
    SetListId(listId + 1);
    setList(NewList);
    setNewWriter("");
    setNewTitle("");
    console.log(newContent);
  };

  return (
    <>
      <form>
        <fieldset>
          작성자:{" "}
          <input
            type="text"
            placeholder="작성자"
            value={newWriter}
            onChange={(e) => {
              setNewWriter(e.target.value);
            }}
          />
          제목:{" "}
          <input
            type="text"
            placeholder="제목"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
          <button type="button" onClick={addList}>
            작성
          </button>
        </fieldset>
      </form>
      <br />
      <table
        style={{
          borderCollapse: "collapse",
          border: "1px solid black",
          width: "500px",
        }}
      >
        <thead>
          <tr>
            <td style={{ border: "1px solid black" }}>번호</td>
            <td style={{ border: "1px solid black" }}>제목</td>
            <td style={{ border: "1px solid black" }}>작성자</td>
          </tr>
        </thead>
        {list.map((value) => {
          return (
            <tbody>
              <tr>
                <td style={{ border: "1px solid black" }}>{value.id}</td>
                <td style={{ border: "1px solid black" }}>{value.title}</td>
                <td style={{ border: "1px solid black" }}>{value.writer}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default MapPrac02;
