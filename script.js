const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".navbar-extra");
const menuInput = document.querySelector("#menu-checkbox");

document.addEventListener("click", function (e) {
  // Jika menu sedang terbuka (checked)
  // DAN yang diklik bukan hamburger, bukan labelnya, dan bukan isi menu
  if (
    menuInput.checked &&
    !hamburger.contains(e.target) &&
    !navbarNav.contains(e.target) &&
    e.target !== menuInput
  ) {
    menuInput.checked = false; // CSS akan otomatis menutup menu & mereset ikon X
  }
});
