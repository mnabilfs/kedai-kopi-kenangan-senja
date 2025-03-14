// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
// const itemDetailModal = document.querySelector('#item-detail-modal');
// const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// itemDetailButtons.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal.style.display = 'flex';
//     e.preventDefault();
//   };
// });

// // klik tombol close modal
// document.querySelector('.modal .close-icon').onclick = (e) => {
//   itemDetailModal.style.display = 'none';
//   e.preventDefault();
// };

// // klik di luar modal
// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = 'none';
//   }
// };

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tombol "item-detail-button"
  const detailButtons = document.querySelectorAll(".item-detail-button");
  const modal = document.querySelector("#item-detail-modal");
  const closeModal = document.querySelector(".close-icon");

  // Cek apakah tombol ditemukan
  if (detailButtons.length === 0 || !modal || !closeModal) {
    console.error("Elemen modal atau tombol tidak ditemukan!");
    return;
  }

  // Tambahkan event listener ke setiap tombol detail produk
  detailButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Hindari reload halaman
      modal.classList.add("show"); // Tampilkan modal
    });
  });

  // Tutup modal saat tombol close diklik
  closeModal.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("show");
  });

  // Tutup modal jika klik di luar modal-container
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});
