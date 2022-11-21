window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 250) {
        document.querySelector('.row.project-1').style.opacity = 1;
    } else {
        document.querySelector('.row.project-1').style.opacity = 0;
    }

    if (window.scrollY > 900) {
        document.querySelector('.row.project-2').style.opacity = 1;
    } else {
        document.querySelector('.row.project-2').style.opacity = 0;
    }

    if (window.scrollY > 1550) {
        document.querySelector('.row.project-3').style.opacity = 1;
    } else {
        document.querySelector('.row.project-3').style.opacity = 0;
    }

    if (window.scrollY > 2200) {
        document.querySelector('.row.project-4').style.opacity = 1;
    } else {
        document.querySelector('.row.project-4').style.opacity = 0;
    }
});