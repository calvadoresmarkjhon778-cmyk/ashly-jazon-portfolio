/* =========================================
   LUCIDE ICONS
========================================= */

lucide.createIcons();


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingElement =
    document.getElementById("typing");

const words = [
    "Registered Nurse 🩺",
    "Compassionate Nurse 💜",
    "Healthcare Professional ✨",
    "Lifelong Learner 🌷"
];

let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;
        }


    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 45 : 90;

    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".info-card, " +
        ".hobby-card, " +
        ".education-card, " +
        ".nursing-quote, " +
        ".skill-card, " +
        ".interesting-lesson, " +
        ".strength-card, " +
        ".growth-box, " +
        ".goal-card"
    );


revealElements.forEach(
    function (element) {

        element.classList.add("reveal");

    }
);


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    function (element) {

        observer.observe(element);

    }
);


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();