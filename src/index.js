import "./styles.css";
import ShowHome from "./home.js";
import ShowMenu from "./menu.js";
import ShowContacts from "./contacts.js";

let currRoute = "home";

const navBtn = document.querySelectorAll(".nav-btn");
const content = document.getElementById("content");

ShowHome();

navBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (currRoute === e.currentTarget.value) return;

    content.replaceChildren();
    navBtn.forEach((b) => b.classList.remove("active-nav")); // remove from all
    e.currentTarget.classList.add("active-nav"); // add to clicked
    currRoute = e.currentTarget.value;

    if (currRoute === "home") {
      ShowHome();
    } else if (currRoute === "menu") {
      ShowMenu();
    } else if (currRoute === "contacts") {
      ShowContacts();
    }
  });
});

alert("Running on localhost:8080");
