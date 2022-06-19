// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
const jsModal = document.querySelector(".modal");
const closeBtnTopRight = document.querySelector(".modal-closebtn");
const closeBtn = document.querySelector(".close-btn");
const modalBtn = document.querySelectorAll(".btn");
const modalHide = document.querySelector(".modal");
const modalContainer = document.querySelector(".js-modal-container");
var header = document.getElementById("header");
var headerHeight = header.clientHeight;
var menu = document.getElementById("mobile-menu");
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

const showModal = function () {
  jsModal.classList.add("open");
};

const hideModal = function () {
  jsModal.classList.remove("open");
};

modalBtn.forEach((buy_ticket) => {
  buy_ticket.addEventListener("click", showModal);
});

closeBtnTopRight.addEventListener("click", hideModal);
closeBtn.addEventListener("click", hideModal);
// window.addEventListener("click", hideModal);
modalHide.addEventListener("click", hideModal);
modalContainer.addEventListener("click", (event) => event.stopPropagation());

menu.addEventListener("click", () => {
  var isClosed = header.clientHeight === headerHeight;

  // header.classList.toggle('show-menu');
  isClosed === true
    ? (header.style.height = "auto")
    : (header.style.height = null);
});
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    var isParentMenu =
      menuItem.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("subnav");
    // console.log(isParentMenu);
    isParentMenu
      ? (header.style.height = "auto")
      : (header.style.height = null);
    // console.log(menuItem);
  });
});
