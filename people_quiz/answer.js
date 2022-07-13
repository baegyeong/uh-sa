const rightZone = document.querySelector;

let score = 0;

document.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowLeft":
      score += 1;
      localStorage.setItem("SCORE", score);
  }
};
