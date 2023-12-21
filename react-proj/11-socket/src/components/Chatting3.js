import "../styles/chat.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Chatting3() {
  const [msgInput, setMsgInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState({});
  const [dmTo, setDmTo] = useState("all");

  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    socket.on("error", (res) => {
      alert(res.msg);
    });

    socket.on("entrySuccess", (res) => {
      setUserId(res.userId);
    });

    socket.on("userList", (res) => {
      setUserList(res);
    });
  }, []);
  //---값을 return하고 있기 떄문에 useMemo 사용
  // 계속 렌더? 말고 userList가 바뀔때만 실행되면 된다.
  //useMemo : 값을 메모라이징 한다.
  //뒤에 있는 의존성 배열에 있는 값이 업데이트 될 때 마다 연산을 실행.
  const userListOptions = useMemo(() => {
    // [<option></option>, <option></option>]
    const options = [];
    //off는 인덱스가 오고, in은 value가 온다.
    //key: userList의 key값을 얻을 수 있다. userlist의 key는 소켓아이디였따!
    //userList[key] : userList의 value값을 가져올 수 있다. (사용자 id값)
    for (const key in userList) {
      // key : userList의 key값 (socket id)
      // userList[key] : userList의 value값 (사용자 id)
      if (userList[key] === userId) continue;
      options.push(
        <option key={key} value={key}>
          {userList[key]}
        </option>
      );
    }
    return options;
  }, [userList]);

  // useCallback: 함수를 메모라이징 한다
  // 뒤에 있는 의존성 배열에 있는 값이 update 될 때만 함수를 다시 선언함.
  //---useCallback : 함수를 메모라이징 한다.
  //리액트는 변경될 필요가 없는 함수인데 계속 렌더링하면서 변경을 시킨다.   //뒤에 있는 의존성 배열에 따라서 값이 업데이트 될 때만 함수를 다시 선언한다.
  //기존 함수를 계속 사용하고, 의존성 배열이 업데이트 될 때만 함수를 선언한다.
  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? "my" : "other";
      const content = `${res.dm ? "(속닥속닥) " : ""} ${res.userId}: ${
        res.msg
      }`;
      const newChatList = [...chatList, { type: type, content: content }];
      setChatList(newChatList);
    },
    [userId, chatList]
  );

  useEffect(() => {
    socket.on("chat", addChatList);
    return () => socket.off("chat", addChatList);
  }, [addChatList]);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  const sendMsg = () => {
    if (msgInput !== "") {
      socket.emit("sendMsg", { userId: userId, msg: msgInput, dm: dmTo });
      setMsgInput("");
    }
  };

  const entryChat = () => {
    initSocketConnect();
    socket.emit("entry", { userId: userIdInput });
  };
  return (
    <>
      <h3>실습 4, 5번</h3>
      <ul>
        <li>채팅창 메세지 전송</li>
        <li>DM 기능 구현</li>
      </ul>

      {userId ? (
        <>
          <div>{userId}님 환영합니다.</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === "notice") return <Notice key={i} chat={chat} />;
              else return <Chat key={i} chat={chat} />;
            })}
          </div>
          <div className="input-container">
            <select value={dmTo} onChange={(e) => setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userListOptions}
            </select>
            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : (
        <>
          <div className="input-container">
            <input
              type="text"
              value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
            />
            <button onClick={entryChat}>입장</button>
          </div>
        </>
      )}
    </>
  );
}
