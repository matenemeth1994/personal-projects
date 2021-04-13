const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  let rgb = [];

  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 255));
  }

  document.body.style.backgroundColor = "rgb(" + rgb.join(",") + ")";
  text.textContent = "rgb(" + rgb.join(",") + ")"
});
