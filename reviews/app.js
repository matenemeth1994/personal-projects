import { reviews } from "./json.js";

let count = 0;

window.addEventListener("DOMContentLoaded", () => {
  name.innerHTML = reviews[0].name;
  job.innerHTML = reviews[0].job;
  desc.innerHTML = reviews[0].text;
  img.src = reviews[0].img;
});

const nextBtn = () => {
  if(count <= reviews.length - 1) {
      count++
      console.log(count);
  }
  name.innerHTML = reviews[count].name;
  job.innerHTML = reviews[count].job;
  desc.innerHTML = reviews[count].text;
  img.src = reviews[count].img;
};

const prevBtn = () => {
  count--;
  name.innerHTML = reviews[count].name;
  job.innerHTML = reviews[count].job;
  desc.innerHTML = reviews[count].text;
  img.src = reviews[count].img;
};

let img = document.getElementById("img");
let desc = document.getElementById("description");
let name = document.getElementById("name");
let job = document.getElementById("job");
document.getElementById("prevBtn").addEventListener("click", prevBtn);
document.getElementById("nextBtn").addEventListener("click", nextBtn);
