// Menu Toggle Functionality
let Menu = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

Menu.onclick = () => {
  Menu.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

// Close menu on scroll
window.onscroll = () => {
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// Theme Toggle Functionality
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

// Load user's theme preference from local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.querySelector(":root").style.setProperty("--main", savedTheme);
}

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};

// Theme Change Event
document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
    // Save the user's theme preference
    localStorage.setItem("theme", color);
    
    // Add smooth transition effect
    document.querySelector(":root").style.transition = "background-color 0.3s ease";
  };
});

// Close theme toggle when clicking outside
document.addEventListener("click", (event) => {
  if (!ThemeToggle.contains(event.target) && !ToggleBtn.contains(event.target)) {
    ThemeToggle.classList.remove("active");
  }
});

// Optional: Close menu on clicking a navbar link
Navbar.querySelectorAll('a').forEach(link => {
  link.onclick = () => {
    Menu.classList.remove("fa-times");
    Navbar.classList.remove("active");
  };
});
