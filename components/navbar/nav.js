let navbase = document.querySelector("body > div");
let navOpen = document.querySelector(".home-icon");
let drawer = document.querySelector(".drawer");
let darken = document.querySelector(".lighten");

opendrawer = () => {
  drawer.className =
    drawer.className === "drawerOpen" ? "drawer" : "drawerOpen";
  darken.className = darken.className === "darken" ? "lighten" : "darken";
};
navOpen.addEventListener("click", this.opendrawer);
