import { menuData } from "./menu-data";

function createMenuItem(item) {
  const div = document.createElement("div");
  div.className = "menu-item";

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;

  const title = document.createElement("h3");
  title.textContent = item.name;

  div.appendChild(img);
  div.appendChild(title);
  return div;
}

function createMenuSection(categoryName, items) {
  const section = document.createElement("section");
  section.className = "menu-category";

  const header = document.createElement("h2");
  header.className = "menu-header";
  header.textContent = categoryName;

  const container = document.createElement("div");
  container.className = "menu-item-container";

  items.forEach((item) => {
    container.appendChild(createMenuItem(item));
  });

  section.appendChild(header);
  section.appendChild(container);

  return section;
}

export default function ShowMenu() {
  const content = document.getElementById("content");

  const menuMain = document.createElement("main");
  menuMain.id = "menu-container";

  for (const category in menuData) {
    const section = createMenuSection(category, menuData[category]);
    menuMain.appendChild(section);
  }

  content.appendChild(menuMain);
}
