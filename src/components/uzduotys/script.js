// 1. sukurti aside elementa, dinamiskai su antraste, sarasu, ir mygtuku
// bisk pridet ten kokiu stiliu (atskira direktorija)

import "./style.css";

function aside(antraste, sarasiukas) {
  const aside = document.createElement("aside");
  aside.className = "aside";
  const asideHeader = document.createElement("h2");
  asideHeader.className = "asideh2";
  asideHeader.textContent = antraste;
  const ul = document.createElement("ul");
  const asideBtn = document.createElement("button");
  asideBtn.className = "asideBtn";
  asideBtn.textContent = "Click me";
  let counter = 0;
  let i;
  for (i = 0; i < 6; i++) {
    const li = document.createElement("li");
    li.textContent = sarasiukas + " " + ++counter;
    ul.appendChild(li);
  }

  aside.append(asideHeader, ul, asideBtn);

  asideBtn.addEventListener("click", () => {
    const banerioHeader = document.querySelector(".banner-heading");
    console.log(banerioHeader.textContent);
  });
  return aside;
}

export default aside;
