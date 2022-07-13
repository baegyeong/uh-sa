const item = document.getElementsByClassName("item");
const itemNav = document.querySelector(".itemNav");
const savedPeopleNum = localStorage.getItem("peopleNum");

for (let i = 0; i < savedPeopleNum; i++) {
  item[i].classList.remove("hidden");
}

if (savedPeopleNum > 3) {
  itemNav.classList.remove("hidden");
}
