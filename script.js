document.addEventListener("DOMContentLoaded", function () {

    // Header
    let lastScrollTop = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScrollTop = scrollTop;
    });

    // Toggle Menu
    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = document.querySelector(".toggle_btn i");
    const dropDownMenu = document.querySelector('.dropdown-menu');

    toggleBtn.addEventListener("click", function () {
        dropDownMenu.classList.toggle("active");

        const isOpen = dropDownMenu.classList.contains("active");
        toggleBtnIcon.classList = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });

    // Parallax effect
    const moon = document.getElementById("moon");
    const heroText = document.getElementById("hero-text")

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        moon.style.transform = `translateY(${scrollY * -0.2}px)`; // Moves the moon slower
        heroText.style.transform = `translateY(${scrollY * 0.2}px)`; // Moves text at normal pace
    });


});


