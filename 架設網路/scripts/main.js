let count=0;

function changeImage(src) {
    document.querySelector("img").src = "../images/" + src + ".png";
  }
  
  document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("s0135_21_0");
  }
  document.body.onmouseup = function () {
    changeImage("s0135_18_0");
  }
