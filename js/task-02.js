const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("ul");
console.log(ingredientsEl);

const elements = ingredients.map((named) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = named;
  itemEl.classList.add("item");

  return itemEl;
});

ingredientsEl.append(...elements);
