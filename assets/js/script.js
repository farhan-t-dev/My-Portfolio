const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("load", function () {
  document.getElementById("loading").style.display = "none";
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 50) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

//   menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

document.getElementById("see-more-btn").addEventListener("click", function () {
  const moreContent = document.getElementById("more-content");
  const seeMoreBtn = document.getElementById("see-more-btn");

  if (moreContent.classList.contains("collapsed")) {
    moreContent.classList.remove("collapsed");
    setTimeout(() => {
      moreContent.classList.remove("hidden");
      moreContent.style.maxHeight = moreContent.scrollHeight + "px";
    }, 50); // Small delay to ensure the transition effect
    seeMoreBtn.textContent = "See Less";
  } else {
    moreContent.style.maxHeight = 0;
    moreContent.classList.add("hidden");
    setTimeout(() => {
      moreContent.classList.add("collapsed");
    }, 500); // Match the transition duration
    seeMoreBtn.textContent = "See More";
  }
});

// Ensure the initial state is set correctly
document.addEventListener("DOMContentLoaded", function () {
  const moreContent = document.getElementById("more-content");
  moreContent.classList.add("collapsed");
  moreContent.style.maxHeight = 0;
});
