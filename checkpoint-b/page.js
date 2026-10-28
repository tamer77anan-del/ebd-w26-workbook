import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.textContent = "";

  for (const item of list) {
    const row = document.createElement("li");
    row.classList.add("row");
    row.textContent = `${item.name}`;
    ul.append(row);
  }
}

export function matching() {
  return items.filter((item) => item.inStock === false);
}

export function start() {
  renderItems(items);

  document.querySelector("#show-some").addEventListener("click", () => {
    renderItems(matching());
  });
}
