let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  var hastag = "#";
  for (let i = 0; i < 6; i++) {
    hastag += hex[getRandomNumber()];
  }
  color.textContent = hastag;
  document.body.style.backgroundColor = hastag;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
