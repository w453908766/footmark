export type CommentMsg = { comments: string[] };

let comments = ["aaa", "bbb", "ccc"];

export async function fetch_comments(msg?: string): Promise<CommentMsg> {
  let cs = new Promise<CommentMsg>(function (resolve, reject) {
    if (msg) {
      setTimeout(function () {
        comments.push(msg);
        resolve({ comments: comments });
      }, 0);
    } else {
      setTimeout(function () {
        resolve({ comments: comments });
      }, 0);
    }
  });
  return cs;
}
