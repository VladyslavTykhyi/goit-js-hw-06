const allCategories = document.querySelectorAll(".item");
console.log(allCategories);
console.log("Number of categories", allCategories.length);

for (const item of allCategories) {
  const elementTitle = item.querySelector("h2");
  const allUnderCategories = item.querySelectorAll("li");

  console.log("Category", elementTitle.textContent);
  console.log("Elements", allUnderCategories.length);
}
