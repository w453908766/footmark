let button = document.createElement("button");

if (true) {
  button.title = "open";
} else {
  button.title = "close";
}

/*
button.onclick = () => {
  if (true) {
    button.title = "open";
  } else {
    button.title = "close";
  }
};
*/

document.body.appendChild(button);
