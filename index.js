let countEL = document.getElementById("count");
let savedEl = document.getElementById("saved-el");
let count = 0;

function increment() {
  count += 1;
    countEL.innerHTML = count;
}

function save() {
  let countStr = count + " - ";
    savedEl.innerHTML += countStr;
    countEL.innerHTML = 0;
    count = 0;
}
