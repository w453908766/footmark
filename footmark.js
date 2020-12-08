
let div = document.createElement('div')
div.style.position = 'fixed'
div.style.right = '0px'
div.style.top = '200px'


let comment = document.createTextNode("hello")
div.appendChild(comment)

document.body.appendChild(div)

let input_div = document.createElement('div')
input_div.style.position = 'fixed'
input_div.style.right = '0px'
input_div.style.bottom = '0px'


let input = document.createElement('input')
let send_btn = document.createElement('button')
send_btn.textContent = "send"

input_div.appendChild(input)
input_div.appendChild(send_btn)
document.body.appendChild(input_div)

function send(msg){
  input.textContent

  const options = {
    method: "POST", // 请求参数
    headers: { "Content-Type": "application/json"}, // 设置请求头
    body: JSON.stringify({content:msg}), // 请求参数
    mode: "cors", // 跨域
  }

  fetch('http://0.0.0.0:1000/comment',options)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      input.textContent = ''
    })
    .catch(function(err){
      console.log(err); // 异常处理
    })
}

input.onkeydown = function (e) {
  if(e.key === 'Enter'){
    send(input.textContent)
  }
}

send_btn.onclick = function (e) {
}
