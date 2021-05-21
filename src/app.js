import add from "./js/add.js";
import say from "./js/say.js";
import "./css/style.css"; //itraukiam css faila i html
import banner from "./components/banner/ban";
banner();
import aside from "./components/uzduotys/script.js";
document.body.append(aside("Aside heading", "Padaryti uzduoti nr:"));

import planet from "./img/planet.jpg";
console.log("planeta:", planet);
const img1 = document.createElement("img");
img1.src = planet;
document.body.append(img1);
