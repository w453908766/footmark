import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import { EmptyMsg, fetchMessage } from "./message";

function Comment(props) {
  return <div>{props.content}</div>;
}

function CommentBox(props) {
  let texts = props.message.comments.map((c, index) => (
    <Comment content={c} key={index}></Comment>
  ));
  return <div>{texts}</div>;
}

function From(props) {
  return (
    <form
      onSubmit={(event) => {
        props.send(event.target[0].value);
        event.target[0].value = "";
        event.preventDefault();
      }}
      style={{ position: "fixed", bottom: "0px" }}
    >
      <input type="text" />
      <button type="submit">Send</button>
    </form>
  );
}

function SideBar() {
  const [message, setMessage] = useState(EmptyMsg);
  const [state, setState] = useState("empty");

  let send = fetchMessage(setState, setMessage);

  useEffect(() => {
    send();
  }, []);

  return (
    <div>
      {state === "finish" ? <CommentBox message={message} /> : state}
      <From send={send} />
    </div>
  );
}
ReactDOM.render(<SideBar />, document.body);
