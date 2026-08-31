// ========================================
// ELEMENTOS DEL DOM
// ========================================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

const currentYear = document.getElementById("current-year");

const navLinks = document.querySelectorAll(".navbar a");

const dynamicText = document.getElementById("dynamic-text");

const sections = document.querySelectorAll(
    "main section[id]"
);



// ========================================
// MENÚ MÓVIL
// ========================================

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const menuIsOpen =
            navbar.classList.contains("active");

        menuBtn.setAttribute(
            "aria-expanded",
            menuIsOpen
        );


        if (menuIsOpen) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });

}



// ========================================
// CERRAR MENÚ AL HACER CLIC
// ========================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {

            navbar.classList.remove("active");

        }


        if (menuBtn) {

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});



// ========================================
// CERRAR MENÚ CON ESCAPE
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (navbar) {

            navbar.classList.remove("active");

        }


        if (menuBtn) {

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});



// ========================================
// MODO OSCURO
// ========================================

function activateLightTheme() {

    document.body.classList.remove(
        "dark-theme"
    );


    if (themeIcon) {

        themeIcon.textContent = "🌙";

    }

}


function activateDarkTheme() {

    document.body.classList.add(
        "dark-theme"
    );


    if (themeIcon) {

        themeIcon.textContent = "☀️";

    }

}



// ========================================
// CARGAR TEMA GUARDADO
// ========================================

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    activateDarkTheme();

} else if (savedTheme === "light") {

    activateLightTheme();

} else {

    const prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    if (prefersDark) {

        activateDarkTheme();

    } else {

        activateLightTheme();

    }

}



// ========================================
// CAMBIAR TEMA
// ========================================

if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        function () {

            const darkThemeIsActive =
                document.body.classList.contains(
                    "dark-theme"
                );


            if (darkThemeIsActive) {

                activateLightTheme();

                localStorage.setItem(
                    "theme",
                    "light"
                );

            } else {

                activateDarkTheme();

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

        }
    );

}



// ========================================
// AÑO AUTOMÁTICO
// ========================================

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}



// ========================================
// TEXTO DINÁMICO DEL HERO
// ========================================

const focusAreas = [

    "Desarrollo Web",

    "Bases de Datos",

    "Análisis de Datos",

    "Programación"

];


let focusIndex = 0;


function changeDynamicText() {

    if (!dynamicText) {

        return;

    }


    dynamicText.classList.add(
        "text-changing"
    );


    setTimeout(function () {

        focusIndex++;


        if (
            focusIndex >=
            focusAreas.length
        ) {

            focusIndex = 0;

        }


        dynamicText.textContent =
            focusAreas[focusIndex];


        dynamicText.classList.remove(
            "text-changing"
        );

    }, 180);

}


if (dynamicText) {

    setInterval(
        changeDynamicText,
        2600
    );

}


// ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================

const revealElements =
    document.querySelectorAll(
        `
        .about-text,
        .card,
        .skills,
        .skill-group,
        .section-heading,
        .featured-project,
        .project-roadmap,
        .roadmap-item,
        .contact
        `
    );


revealElements.forEach(
    function (element) {

        element.classList.add(
            "reveal"
        );

    }
);


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    } else {

                        entry.target.classList.remove(
                            "visible"
                        );

                    }

                }
            );

        },

        {

            threshold: 0.12,

            rootMargin:
                "0px 0px -50px 0px"

        }

    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);

// ========================================
// SECCIÓN ACTIVA EN EL MENÚ
// ========================================

const sectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const sectionId =
                            entry.target.id;


                        navLinks.forEach(
                            function (link) {

                                link.classList.remove(
                                    "active-link"
                                );


                                const linkHref =
                                    link.getAttribute(
                                        "href"
                                    );


                                if (
                                    linkHref ===
                                    "#" + sectionId
                                ) {

                                    link.classList.add(
                                        "active-link"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },

        {

            threshold: 0.35,

            rootMargin:
                "-15% 0px -55% 0px"

        }

    );


sections.forEach(
    function (section) {

        sectionObserver.observe(
            section
        );

    }
);