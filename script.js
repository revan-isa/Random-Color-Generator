let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  var letters = "0123456789abcdef";
  var hastag = ["#", "#", "#", "#", "#", "#"];

  for (let i = 0; i < 1; i++) {
    hastag[i] +=
      letters[Math.floor(Math.random() * 16)] +
      letters[Math.floor(Math.random() * 16)] +
      letters[Math.floor(Math.random() * 16)] +
      letters[Math.floor(Math.random() * 16)] +
      letters[Math.floor(Math.random() * 16)] +
      letters[Math.floor(Math.random() * 16)];

    color.textContent = hastag[i];
    document.body.style.backgroundColor = hastag[i];
  }
});
