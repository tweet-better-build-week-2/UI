let navbase = document.querySelector("body > div");
let navOpen = document.querySelector(".home-icon");
let drawer = document.querySelector(".drawer");

opendrawer = () => {
  drawer.className =
    drawer.className === "drawerOpen" ? "drawer" : "drawerOpen";
};
navOpen.addEventListener("click", this.opendrawer);
