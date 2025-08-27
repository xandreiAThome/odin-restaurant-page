import burgerFries from "./public/burger-fries.png";

export default function ShowHome() {
  const content = document.getElementById("content");

  const main = document.createElement("main");
  main.id = "main-home";

  const heroTitleDiv = document.createElement("div");
  heroTitleDiv.className = "hero-title";

  const h1Top = document.createElement("h1");
  h1Top.className = "hero-title-top";
  h1Top.textContent = "Mc Gregor's";

  const h1Bot = document.createElement("h1");
  h1Bot.className = "hero-title-bot";
  h1Bot.textContent = "FOOD HOUSE";

  const para = document.createElement("p");
  para.textContent = "Delicious homemade food and refreshments just for you";

  const button = document.createElement("button");
  button.className = "default-btn";
  button.textContent = "Order Now";

  heroTitleDiv.appendChild(h1Top);
  heroTitleDiv.appendChild(h1Bot);
  heroTitleDiv.appendChild(para);
  heroTitleDiv.appendChild(button);

  const heroImg = document.createElement("img");
  heroImg.className = "hero-img";
  heroImg.src = burgerFries;
  heroImg.alt = "halo-halo and burger";

  main.appendChild(heroTitleDiv);
  main.appendChild(heroImg);

  content.appendChild(main);
}
