// script.js

// JSON-like data for projects
const projects = [
  {
    id: 1,
    title: "First landing page",
    image: "images/First landing page for fcc.png",
    description:
      "A simple product landing page with a clean and responsive design. I know it's not the best but it's my first one soo.",
    link: "https://github.com/Cooljr/product-landing-page",
  },
  {
    id: 2,
    title: "Technical documentation demo",
    image: "images/technical documentation.png",
    description:
      "A small technical documentation website built using HTML and CSS. It's a simple project that demonstrates the use of JavaScript. But it's not the best.As its the demo one.",
    link: "https://github.com/Cooljr/Technical-documentation-website",
  },
  {
    id: 3,
    title: "Mini Game 1",
    image: "images/mini role-playing game.png",
    description:
      "This project is a simple role-playing game that I built using HTML, CSS, and JavaScript. It's a fun project that I really enjoyed working on.",
    link: "https://farhan-t-dev.github.io/Role-playing-game/",
  },
  {
    id: 4,
    title: "Weather app landing page",
    image: "images/Weather app.png",
    description:
      "A simple weather app landing page that displays the app's functionality and design. I built this project using HTML, CSS, JavaScript, jQuery and also bootstrap. It's my first project using jQuery and bootstrap so it was a really hard and interesting one.",
    link: "https://farhan-t-dev.github.io/Weather-app-landing-page/",
  },
];

let currentProjectIndex = 0;

// Function to render the gallery section
function renderGallery() {
    const galleryContainer = document.getElementById("projects");
    galleryContainer.innerHTML = ""; // Clear existing content

    // Sort projects by ID in descending order
    const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

    sortedProjects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-tile");
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <h3>${project.title}</h3>
        `;
        projectCard.addEventListener("click", () => openModal(index, sortedProjects));
        galleryContainer.appendChild(projectCard);
    });
}

// Function to open the modal box
function openModal(index, sortedProjects) {
    currentProjectIndex = index;
    const project = sortedProjects[currentProjectIndex];
    const modal = document.getElementById("projectModal");
    document.getElementById("modalTitle").innerText = project.title;
    document.getElementById("modalImage").src = project.image;
    document.getElementById("modalImage").alt = project.title;
    document.getElementById("modalDescription").innerText = project.description;
    document.getElementById("modalLink").href = project.link;
    modal.style.display = "block";
}

// Function to close the modal box
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Function to show the next project
function showNextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    openModal(currentProjectIndex, [...projects].sort((a, b) => b.id - a.id));
}

// Function to show the previous project
function showPreviousProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    openModal(currentProjectIndex, [...projects].sort((a, b) => b.id - a.id));
}

// Event listener for closing the modal
document.querySelector(".close").addEventListener("click", closeModal);

// Event listeners for navigation buttons
document.querySelector(".prev").addEventListener("click", showPreviousProject);
document.querySelector(".next").addEventListener("click", showNextProject);

// Event listener for keyboard actions
window.addEventListener("keydown", (event) => {
    const modal = document.getElementById("projectModal");
    if (modal.style.display === "block") {
        if (event.key === "Escape") {
            closeModal();
        } else if (event.key === "ArrowRight") {
            showNextProject();
        } else if (event.key === "ArrowLeft") {
            showPreviousProject();
        }
    }
});

// Initial render of the gallery
renderGallery();

// Function to render the projects on the index page
function renderIndexProjects() {
  const indexProjectsContainer = document.getElementById("index-projects");
  indexProjectsContainer.innerHTML = ""; // Clear existing content

  // Sort projects by ID in descending order and take the first three
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id).slice(0, 3);

  sortedProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-tile");
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-img">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View on GitHub</a>
    `;
    indexProjectsContainer.appendChild(projectCard);
  });
}

// Initial render of the projects on the index page
renderIndexProjects();