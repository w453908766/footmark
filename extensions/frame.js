/*
<iframe
  src="http://127.0.0.1:1000"
  style={{ position: "fixed", right: "240px", top: "0px", bottom: "0px" }}
></iframe>;
*/

// {
//   height: 100%; /* Full-height: remove this if you want "auto" height */
//   width: 160px; /* Set the width of the sidebar */
//   position: fixed; /* Fixed Sidebar (stay in place on scroll) */
//   z-index: 1; /* Stay on top */
//   top: 0; /* Stay at the top */
//   left: 0;
//   background-color: #111; /* Black */
//   overflow-x: hidden; /* Disable horizontal scroll */
//   padding-top: 20px;
// }

let frame = document.createElement("iframe");
frame.src = "http://127.0.0.1:1000";
frame.style.position = "fixed";

frame.style.height = "100%";
frame.style.width = "200px";
frame.style.zindex = "1";
frame.style.right = "0px";
frame.style.top = "0px";
frame.style.bottom = "0px";

document.body.appendChild(frame);
