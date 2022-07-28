const bg = document.querySelector("#bg");
function clickBg() {
  location.href = "http://localhost:3000/close/commonsense/help";
}

bg.addEventListener("click", clickBg);

// 중복 없는 배열 만들기
const people = localStorage.getItem("commonsenseNum");
let count = 45;
let num = Math.floor(Math.random() * count);
let arr = [];

function makeArr() {
  let i = 0;
  while (i < people * 5) {
    num = Math.floor(Math.random() * count);
    if (!sameNum(num)) {
      arr.push(num);
      i++;
    }
  }
  console.log(arr);
}
makeArr();

function sameNum(n) {
  for (var i = 0; i < arr.length; i++) {
    if (n === arr[i]) {
      return true;
    }
  }
  return false;
}
localStorage.setItem("arrayCommon", JSON.stringify(arr));
