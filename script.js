const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});



const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// Vuosi footerissa

const footerText = document.querySelector(".footer p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Joonas. Kaikki oikeudet pidätetään.`;
}
