function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnToChange = document.querySelector(".change-color");

btnToChange.addEventListener("click", onChangeColorBg);

function onChangeColorBg() {
  const colorNum = getRandomHexColor();
  bodyEl.style.backgroundColor = colorNum;
  spanEl.textContent = colorNum;
}
