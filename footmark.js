

let div = document.createElement('div')
div.style.position = 'fixed'
div.style.right = '0px'
div.style.top = '200px'


let comment = document.createTextNode("hello")
div.appendChild(comment)

document.body.appendChild(div)