document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a"); // Selects all <a> inside <nav>

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default action (if needed)
            alert("clicked!");
        });
    });
});
