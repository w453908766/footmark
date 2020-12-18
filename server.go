package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
//	"strings"
)

/*
func sayhelloName(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()       // 解析参数，默认是不会解析的
	fmt.Println(r.Form) // 这些信息是输出到服务器端的打印信息
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	fmt.Fprintf(w, "Hello astaxie!") // 这个写入到 w 的是输出到客户端的
	fmt.Println()
}
*/
type ReqMsg struct{ 
	Url string `json:"url"` 
	Comment string `json:"comment"`
}

type RespMsg struct{
    Comments      []string  `json:"comments"`
}

func fetchComments(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()       // 解析参数，默认是不会解析的

	var req ReqMsg
	_ = json.NewDecoder(r.Body).Decode(&req)
	fmt.Println(req)

	var comments = []string{"aaa","bbb","ccc","ddd","eee"}
	m := RespMsg{Comments: comments}
	json.NewEncoder(w).Encode(m)

	fmt.Println()
}

func main() {
//	http.HandleFunc("/xxx", sayhelloName)       // 设置访问的路由
  http.Handle("/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/fetch_comments", fetchComments)       // 设置访问的路由

	err := http.ListenAndServe(":1000", nil) // 设置监听的端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
