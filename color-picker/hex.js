const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  let randomHex = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomHex;
  text.textContent = "#" + randomHex;
});
