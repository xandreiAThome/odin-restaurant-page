export default function ShowContacts() {
  const content = document.getElementById("content");

  const contactsMain = document.createElement("main");
  contactsMain.id = "contacts";

  const contactCard = document.createElement("div");
  contactCard.classList.add("contact-card");

  function createContactBlock(titleText, svgHTML, infoText) {
    const span = document.createElement("span");

    const title = document.createElement("h2");
    title.textContent = titleText;

    const info = document.createElement("h3");
    info.innerHTML = svgHTML + " " + infoText;

    span.appendChild(title);
    span.appendChild(info);

    return span;
  }

  const phoneSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="lucide lucide-phone-icon lucide-phone">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
</svg>`;

  const mapSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="lucide lucide-map-pin-icon lucide-map-pin">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
    <circle cx="12" cy="10" r="3"/>
</svg>`;

  const contactUsBlock = createContactBlock(
    "Contact Us",
    phoneSVG,
    "09123456789"
  );
  const findUsBlock = createContactBlock(
    "Find Us",
    mapSVG,
    "Victoria N. Samar"
  );

  contactCard.appendChild(contactUsBlock);
  contactCard.appendChild(findUsBlock);

  contactsMain.appendChild(contactCard);

  content.appendChild(contactsMain);
}
