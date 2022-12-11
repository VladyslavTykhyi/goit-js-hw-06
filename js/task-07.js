const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = `${Number(fontSizeControlEl.value)}px`;

fontSizeControlEl.addEventListener("input", onInputChangeFontSize);

function onInputChangeFontSize(event) {
  textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
}

// Another solution that should work too

// const inputEl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");
// const addEl = document.querySelector(".add");

// inputEl.addEventListener("input", onChangeTextSize);

// function onChangeTextSize(event) {
//   const sizes = event.currentTarget.value;

//   textEl.style.fontSize = sizes + "px";
//   console.log(sizes);
// }
