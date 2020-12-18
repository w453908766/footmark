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
