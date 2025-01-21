// to top starts here

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// to top ends here

// swipper

// var swiper = new Swiper(".contents", {
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//   },
// });
// swipper end

// hamburger code starts here
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const hideSidebar = document.querySelector(".sidebar");
  hideSidebar.style.display = "none";
}

const navItems = document.querySelectorAll(".navbar-item"); // Select all navbar items
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    hideSidebar(); // Hide the sidebar on click
  });
});

// hamburger codes ends here

// nav links active

// Select all navbar items
const navbarItems = document.querySelectorAll(".navbar-item, .des");

// Add a click event listener to each navbar item
navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove the 'active' class from all navbar items
    navbarItems.forEach((nav) => nav.classList.remove("active"));

    // Add the 'active' class to the clicked item
    item.classList.add("active");
  });
});
