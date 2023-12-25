//server🦖 node-backend > 12-socket > server-prac2.js

//💛 코드 이해 후 레포 따로 파기

//💛 메인, 유저 리스트, 채팅창 컴포넌트 분리
//💛 메인, 채팅화면 라우터 설정. 나가기 버튼 클릭 시 네비게이터로 메인 라우터로 이동하기
//💛 채팅목록 스크롤 구현
//💛 메인화면 엔터 시 입장 가능
//💛 유효성 검사, 예외 처리하기
//💛 배경 테마 바꾸기 / 실습 한 것 처럼 selectBox로 배경컬러 선택 시 변경 / 어두운 배경 시 폰트 색 흰색으로 변경

import "../styles/chatProjectStyle.css";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Chatting3() {
  const [msgInput, setMsgInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState([]);
  const [dmTo, setDmTo] = useState("all");
  const [chatPlaceholder, setChatPlaceholder] =
    useState("메시지를 입력해주세요 : )");

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
          👂🏻{userList[key]} 에게 속닥속닥
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
      const content = {
        userId: res.userId,
        msg: res.msg,
        dm: res.dm ? "👂🏻귓속말: " : "",
      };

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
    } else {
      setChatPlaceholder("✅ 메세지를 입력해주세요❗️✅");
    }
  };

  const clickEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMsg();
    }
  };

  useEffect(() => {
    socket.on("userList", (res) => {
      setUserList(res);
    });
  }, []);
  const entryChat = () => {
    const newUserList = [...userList, userIdInput];
    setUserList(newUserList);
    console.log(userList);
    initSocketConnect();
    socket.emit("entry", { userId: userIdInput });
  };

  // const chatContent = ({chat})=>{
  //   const {type, connect} = chat;

  // }

  const goMain = () => {
    console.log("나가기");
    window.location.reload();
  };

  const box = useRef();

  return (
    <>
      {userId ? (
        <>
          <div className="chat-box">
            <div className="chat-box-left">
              <h3>채팅방 참가자 목록</h3>
              <ul>
                <div className="scroll-box" ref={box}>
                  {userList.map((user) => (
                    <>
                      <div className="userList-box ">
                        <div className="userList-profile">
                          <div className="userList-img"></div>
                        </div>
                        <div className="userList-name ">
                          <li key={user}>{user}</li>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </ul>
              <div className="chat-out" onClick={goMain}>
                <div className="chat-out-icon"></div>
                {/* <span>나가기</span> */}
              </div>
            </div>
            <div className="chat-box-right">
              <div className="chat-welcome">
                😊
                {userId}님 환영합니다. 😊
              </div>
              <div className="chat-wrapper">
                <div className="chat-container">
                  {chatList.map((chat, i) => {
                    if (chat.type === "notice") {
                      return <Notice key={i} chat={chat} />;
                    } else {
                      const { userId, msg, dm } = chat.content;
                      return (
                        <div
                          className={`chat ${chat.type}`}
                          style={{
                            textAlign: chat.type === "my" ? "right" : "left",
                          }}
                        >
                          {chat.type === "other" && (
                            <span className="user-id">{userId}</span>
                          )}
                          <span className="message">
                            {dm} {msg}
                          </span>
                        </div>
                      );
                    }
                  })}
                </div>

                <div className="input-container">
                  <select
                    value={dmTo}
                    onChange={(e) => setDmTo(e.target.value)}
                  >
                    <option value="all">전체 전송</option>
                    {userListOptions}
                  </select>
                  <input
                    type="text"
                    placeholder={chatPlaceholder}
                    value={msgInput}
                    onChange={(e) => setMsgInput(e.target.value)}
                    onKeyPress={clickEnter}
                  />
                  <button onClick={sendMsg}>전송</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="startChat-container">
            <p className="logo">ChatChat</p>
            <input
              type="text"
              value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
              placeholder="입장 시 사용 할 ID를 입력해주세요 🙂"
            />
            <button onClick={entryChat}>입장</button>
          </div>
        </>
      )}
    </>
  );
}
