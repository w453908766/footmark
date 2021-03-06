export type CommentMsg = { comments: string[] };

export async function fetch_comments(msg?: string): Promise<CommentMsg> {
  var searchParams = new URLSearchParams(window.location.search);
  let url = searchParams.get("url");

  const options = {
    method: "POST", // 请求参数
    headers: new Headers({ "Content-Type": "application/json" }), // 设置请求头
    body: JSON.stringify({ url: url, comment: msg }), // 请求参数

    //  mode: "cors" as RequestMode, // no-cors, cors, *same-origin
  };

  let comments = fetch("http://127.0.0.1:1000/fetch_comments", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (comments) {
      console.log(comments);
      return comments;
    })
    .catch(function (err) {
      console.log(err); // 异常处理
    });

  return comments;
}
