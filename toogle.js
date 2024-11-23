// Toggle the main menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
        navMenu.classList.add("visible");
    } else {
        navMenu.classList.remove("visible");
    }
});

// Toggle dropdowns
document.querySelectorAll(".menu-item > a").forEach(link => {
    link.addEventListener("click", (e) => {
        const dropdown = link.nextElementSibling;
        if (dropdown && dropdown.classList.contains("dropdown")) {
            e.preventDefault(); // Prevent default link behavior
            dropdown.classList.toggle("visible");
        }
    });
});
