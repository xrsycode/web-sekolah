// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

let navLink = document.getElementsByClassName("navli");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].children[1].onclick = () => {
    navLink[i].children[2].classList.toggle("show1");
  };
}

let moreLinks = document.getElementsByClassName("more");
for (let i = 0; i < moreLinks.length; i++) {
  console.log(moreLinks[i]);
  moreLinks[i].children[0].children[1].onclick = () => {
    moreLinks[i].children[1].classList.toggle("show2");
  };
}
