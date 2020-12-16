import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

/*
function send_comment(msg) {
  const options = {
    method: "POST", // 请求参数
    headers: { "Content-Type": "application/json" }, // 设置请求头
    body: JSON.stringify({ content: msg }), // 请求参数
    mode: "cors", // 跨域
  };

  fetch("http://0.0.0.0:1000/send_comment", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {})
    .catch(function (err) {
      console.log(err); // 异常处理
    });
}
*/

function fetch_comments() {
  const options = {
    method: "GET", // 请求参数
    headers: { "Content-Type": "application/json" }, // 设置请求头
    body: JSON.stringify({ url: document.URL }), // 请求参数
    mode: "cors", // 跨域
  };

  //  let comments = fetch("http://0.0.0.0:1000/fetch_comments", options)
  let comments = fetch("http://0.0.0.0:1000/fetch_comments")
    .then(function (response) {
      return response.json();
    })
    .then(function (comments) {
      return comments;
    })
    .catch(function (err) {
      console.log(err); // 异常处理
    });

  return comments;
}

type CommentMsg = { comments: string[] };
const EmptyMsg: CommentMsg = { comments: [] };

async function fetch_comments0(): Promise<CommentMsg> {
  let cs = new Promise<CommentMsg>(function (resolve, reject) {
    setTimeout(function () {
      let comments = ["aaa", "bbb", "ccc"];
      resolve({ comments: comments });
    }, 1000);
  });
  return cs;
}

function useFetch(): [CommentMsg, boolean, boolean] {
  const [data, setData] = useState(EmptyMsg);
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=redux"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch_comments0();

        setData(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [data, isLoading, isError];
}

function Comment(props) {
  return <div>{props.content}</div>;
}

function Comments(props) {
  let texts = props.comments.map((c, index) => (
    <Comment content={c} key={index}></Comment>
  ));
  return <div>{texts}</div>;
}

function CommentBox() {
  let [data, isLoading, isError] = useFetch();
  return <Comments comments={data.comments} />;
}

function From() {
  return (
    <form
      onSubmit={(event) => {
        alert("发送成功");
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
  return (
    <div
      style={{ position: "fixed", right: "240px", top: "0px", bottom: "0px" }}
    >
      <CommentBox />
      <From />
    </div>
  );
}

let div = document.createElement("div");

document.body.appendChild(div);

ReactDOM.render(<SideBar />, div);
