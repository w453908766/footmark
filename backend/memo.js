
var searchParams = new URLSearchParams(window.location.search);

let xxx = searchParams.get("xxx");

console.log(xxx);

let url = new URL("http://127.0.0.1:1000");

url.searchParams.set("xxx", "10000");

let url1 = new URL(url.href);

var searchParams = new URLSearchParams(url1.search);

let xxx = searchParams.get("xxx");

console.log(xxx);
