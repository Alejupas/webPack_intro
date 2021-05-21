function banner() {
  const bannerDiv = document.createElement("div");
  bannerDiv.className = "banner-div";
  document.body.insertAdjacentElement("beforeend", bannerDiv);
  const bannerHeading = document.createElement("h2");
  bannerHeading.className = "banner-heading";
  bannerHeading.textContent = "Check out our latest products";
  const bannerP = document.createElement("p");
  bannerP.className = "banner-paragraph";
  bannerP.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum labore quis provident?";
  const bannerBtn = document.createElement("button");
  bannerBtn.className = "banner-btn";
  bannerBtn.textContent = "Buy now";
  bannerDiv.append(bannerHeading, bannerP, bannerBtn);

  bannerBtn.addEventListener("click", () => {
    console.log("paspaudei banerio butona");
  });
}

export default banner;
