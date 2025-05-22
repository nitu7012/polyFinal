document.addEventListener("DOMContentLoaded", () => {
  // ================== TOGGLE MOBILE MENU ==================
  const toggleBtn = document.getElementById('msc-toggle-btn');
  const navMenu = document.getElementById('msc-mobile-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      navMenu.style.transition = 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out';
    });
  }

  // ================== ACTIVE NAV LINK ==================
  const navLinks = document.querySelectorAll(".msc-agrotech-header-navbar ul li a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href").split("/").pop();

    if ((currentPage === "" || currentPage === "index.html") && linkHref === "index.html") {
      link.classList.add("active");
    } else if (currentPage === linkHref) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ================== CAROUSEL AUTO SLIDE ==================
  const slides = document.querySelectorAll(".msc-agrotech-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    if (slides[index]) {
      slides[index].classList.add("active");
    }
  }

  function changeSlide(dir) {
    if (slides.length === 0) return;
    currentIndex = (currentIndex + dir + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  if (slides.length > 0) {
    showSlide(currentIndex);
    setInterval(() => {
      changeSlide(1);
    }, 4000);
  }

  // ================== PREVENT FOCUS FLASH ON NAV BUTTONS ==================
  document.querySelectorAll('.msc-agrotech-nav').forEach(btn => {
    btn.addEventListener('mousedown', e => e.preventDefault());
  });

  // ================== FAQ ACCORDION BORDER ==================
  const accordionItems = document.querySelectorAll(".msc-agrotech-faq .accordion-item");

  accordionItems.forEach(item => {
    const collapseEl = item.querySelector(".accordion-collapse");

    if (collapseEl) {
      collapseEl.addEventListener("show.bs.collapse", () => {
        item.classList.add("green-border");
      });

      collapseEl.addEventListener("hide.bs.collapse", () => {
        item.classList.remove("green-border");
      });
    }
  });
});
