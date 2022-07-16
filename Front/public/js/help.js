const close = document.querySelector("#next");

function clickClose() {
  console.log("dfds");
  location.href = "http://localhost:3000/close/sinseo/peoplequiz";
}

close.addEventListener("click", clickClose);
