
// Build the nav
const list = document.querySelector("#navbar__list");

const sections = document.querySelectorAll("section");

// Add event listeners to build menu and scroll to section
sections.forEach((section, index) => {
    const element = document.createElement("li");
    element.textContent = `Section ${index + 1}`;
    element.id = `Section ${index + 1}`;

    const link = document.createElement("a");
    link.href = `#section${index + 1}`;
    link.textContent = `section ${index + 1}`;

    link.classList.add("menu__link");


    // Add event listener to scroll to section
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(`#section${index + 1}`);

        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector("header").offsetHeight,
            behavior: "smooth"
        });

        const Links = document.querySelectorAll(".menu__link");
        Links.forEach((Link) => {
            Link.classList.remove("active");
        });

        link.classList.add("active");
    });

    element.appendChild(link);
    list.appendChild(element);
});

// Scroll event to highlight active section
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".menu__link");

    let currentIndex = -1;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentIndex = index;
        }
    });

    // Remove active class from all links
    links.forEach((link) => {
        link.classList.remove("active");
    });

    // Add active class to the link of the section that is visible
    if (currentIndex !== -1) {
        links[currentIndex].classList.add("active");
    }
});

// Add event listener to the menu links
document.querySelectorAll(".menu__link").forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        // Remove active class from all links
        document.querySelectorAll(".menu__link").forEach((link) => {
            link.classList.remove("active");
        });
        // Add active class to the clicked link
        link.classList.add("active");
    });
});