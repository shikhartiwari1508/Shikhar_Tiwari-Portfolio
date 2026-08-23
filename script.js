/* =========================================================
   SHIKHAR TIWARI — FUTURISTIC PORTFOLIO ENGINE
========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});



/* ================= ELEMENTS ================= */

const body =
    document.body;

const navbar =
    document.getElementById("navbar");

const themeBtn =
    document.getElementById("themeBtn");

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const scrollProgress =
    document.getElementById("scrollProgress");



/* ================= THEME ================= */

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    body.classList.add("light");

}


function updateThemeIcon() {

    if (!themeBtn) return;

    const isLight =
        body.classList.contains("light");


    themeBtn.innerHTML =
        isLight

        ? '<i class="fa-solid fa-sun"></i>'

        : '<i class="fa-solid fa-moon"></i>';

}


updateThemeIcon();


themeBtn?.addEventListener("click", () => {

    body.classList.toggle("light");


    const isLight =
        body.classList.contains("light");


    localStorage.setItem(
        "portfolio-theme",
        isLight
            ? "light"
            : "dark"
    );


    updateThemeIcon();

});



/* ================= NAVBAR ================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ================= SCROLL PROGRESS ================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;


    const percentage =
        documentHeight > 0

        ? (scrollTop / documentHeight) * 100

        : 0;


    scrollProgress.style.width =
        `${percentage}%`;

});



/* ================= MOBILE MENU ================= */

menuBtn?.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");


    const icon =
        menuBtn.querySelector("i");


    if (
        mobileMenu.classList.contains("open")
    ) {

        icon.className =
            "fa-solid fa-xmark";

    } else {

        icon.className =
            "fa-solid fa-bars";

    }

});


mobileMenu
    ?.querySelectorAll("a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");


            const icon =
                menuBtn.querySelector("i");


            icon.className =
                "fa-solid fa-bars";

        });

    });



/* ================= SMOOTH SCROLL ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) return;


            const target =
                document.querySelector(targetId);


            if (!target) return;


            event.preventDefault();


            const offset =
                navbar.offsetHeight + 10;


            window.scrollTo({

                top:
                    target.offsetTop - offset,

                behavior:
                    "smooth"

            });

        });

    });



/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNav() {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;


        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();



/* ================= TYPING EFFECT ================= */

const typingText =
    document.getElementById("typingText");


const typingWords = [

    "Data Science Student",

    "AI Enthusiast",

    "Web Developer",

    "Python Programmer",

    "Data Explorer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingText) return;


    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % typingWords.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );

}


typeEffect();



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".glass-card, " +
        ".info-box, " +
        ".skill-card, " +
        ".timeline-item, " +
        ".project-card, " +
        ".certificate-card, " +
        ".contact-wrapper"
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );


                    if (
                        entry.target.classList.contains(
                            "skill-card"
                        )
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }


                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element =>
        revealObserver.observe(element)
);



/* ================= CURSOR GLOW ================= */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


if (
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    document.addEventListener(
        "mousemove",
        event => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

            cursorGlow.style.opacity =
                "1";

        }
    );

}



/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    portfolio: {

        title:
            "Personal Portfolio Website",

        description:
            "A futuristic responsive portfolio website created to present my profile, education, technical skills, projects and certificates in a professional digital experience.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Font Awesome",
            "Google Fonts"
        ],

        working:
            "HTML provides the complete page structure. CSS creates the responsive futuristic interface, animations, glass effects and layouts. JavaScript handles theme switching, navigation, modals, animations, typing effects and interactive features.",

        built:
            "A complete personal portfolio system containing Hero, About, Skills, Education, Projects, Certificates and Contact sections.",

        features: [

            "Responsive design",

            "Dark and Light theme",

            "Animated background",

            "Typing animation",

            "Project detail system",

            "Certificate detail system",

            "Command palette",

            "Scroll animations",

            "Contact section",

            "Mobile navigation"

        ]

    },


    calculator: {

        title:
            "Calculator Application",

        description:
            "A browser-based calculator application designed with a clean interface and interactive controls.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],

        working:
            "HTML creates the calculator interface, CSS handles its visual layout and JavaScript processes button inputs and mathematical operations.",

        built:
            "A functional calculator interface capable of receiving numerical input and performing common arithmetic operations.",

        features: [

            "Arithmetic operations",

            "Interactive buttons",

            "Real-time calculations",

            "Responsive interface",

            "Clean UI"

        ]

    },


    student: {

        title:
            "Student Management System",

        description:
            "A Java-based student record management project designed to organize and manage student information.",

        technologies: [
            "Java",
            "OOP",
            "Data Structures",
            "Programming Fundamentals"
        ],

        working:
            "The application uses Java programming concepts and object-oriented structures to store and process student information.",

        built:
            "A structured student record system where student information can be organized and managed through programming logic.",

        features: [

            "Student records",

            "Data organization",

            "OOP concepts",

            "Record management",

            "Structured programming"

        ]

    },


    careerpilot: {

        title:
            "CareerPilot AI",

        description:
            "An AI-powered career assistant concept designed to combine career guidance, resume analysis and skill development into one platform.",

        technologies: [
            "Python",
            "FastAPI",
            "HTML",
            "CSS",
            "JavaScript",
            "SQLite",
            "PostgreSQL",
            "NLP",
            "LLM APIs"
        ],

        working:
            "The planned architecture uses a frontend for user interaction, a Python/FastAPI backend for application logic and a database for storing user information. AI/NLP components can process resumes and career-related queries.",

        built:
            "A modular career platform concept covering resume analysis, ATS scoring, portfolio generation, interview practice, skill-gap analysis and career roadmaps.",

        features: [

            "Resume Analyzer",

            "ATS Score Checker",

            "Resume Builder",

            "Portfolio Generator",

            "Interview Practice",

            "Skill Gap Analysis",

            "Career Roadmap",

            "AI Career Chat"

        ]

    }

};



/* ================= PROJECT MODAL ================= */

const projectModal =
    document.getElementById(
        "projectModal"
    );


const projectButtons =
    document.querySelectorAll(
        ".detail-btn"
    );


projectButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const key =
                button.dataset.project;


            const data =
                projectData[key];


            if (!data) return;


            document.getElementById(
                "modalProjectTitle"
            ).textContent =
                data.title;


            document.getElementById(
                "modalProjectDescription"
            ).textContent =
                data.description;


            document.getElementById(
                "modalProjectWorking"
            ).textContent =
                data.working;


            document.getElementById(
                "modalProjectBuilt"
            ).textContent =
                data.built;


            const techContainer =
                document.getElementById(
                    "modalProjectTech"
                );


            techContainer.innerHTML =
                "";


            data.technologies
                .forEach(tech => {

                    const tag =
                        document.createElement(
                            "span"
                        );

                    tag.textContent =
                        tech;

                    techContainer.appendChild(
                        tag
                    );

                });


            const featureList =
                document.getElementById(
                    "modalProjectFeatures"
                );


            featureList.innerHTML =
                "";


            data.features
                .forEach(feature => {

                    const li =
                        document.createElement(
                            "li"
                        );

                    li.textContent =
                        feature;

                    featureList.appendChild(
                        li
                    );

                });


            openModal(
                projectModal
            );

        });

});



/* =========================================================
   CERTIFICATE DATA
========================================================= */

const certificateData = {

    cert1: {

        title:
            "Professional Certificate",

        issuer:
            "Certificate Program",

        image:
            "WhatsApp Image 2026-07-24 at 11.33.24 PM (1).jpeg",

        about:
            "This certificate is included in my professional learning portfolio.",

        learning: [
            "Professional learning",
            "Practical exposure",
            "Continuous skill development"
        ]

    },


    cert2: {

        title:
            "Professional Learning Certificate",

        issuer:
            "Certificate Program",

        image:
            "WhatsApp Image 2026-07-24 at 11.33.25 PM (1).jpeg",

        about:
            "A certificate representing additional learning and skill development.",

        learning: [
            "Course concepts",
            "Practical learning",
            "Professional development"
        ]

    },


    cert3: {

        title:
            "Learning Certificate",

        issuer:
            "Certificate Program",

        image:
            "WhatsApp Image 2026-07-24 at 11.33.25 PM (2).jpeg",

        about:
            "A certificate included as part of my academic and professional learning journey.",

        learning: [
            "Technical concepts",
            "Problem solving",
            "Continuous learning"
        ]

    },


    cert4: {

        title:
            "Professional Development Certificate",

        issuer:
            "Certificate Program",

        image:
            "WhatsApp Image 2026-07-24 at 11.33.25 PM.jpeg",

        about:
            "Certificate showcasing participation in a learning experience.",

        learning: [
            "Professional development",
            "Learning experience",
            "Skill improvement"
        ]

    },


    google1: {

        title:
            "Google Certificate",

        issuer:
            "Google",

        image:
            "google1.jpeg",

        about:
            "A Google certificate included in my professional learning portfolio.",

        learning: [
            "Technology concepts",
            "Practical learning",
            "Analytical thinking",
            "Professional skills"
        ]

    },


    deloitte: {

        title:
            "Deloitte Certificate",

        issuer:
            "Deloitte",

        image:
            "deloitte.jpeg",

        about:
            "A Deloitte certificate representing professional learning and development.",

        learning: [
            "Analytical thinking",
            "Problem solving",
            "Industry-oriented learning",
            "Professional development"
        ]

    },


    google2: {

        title:
            "Google Learning Certificate",

        issuer:
            "Google",

        image:
            "google2.jpeg",

        about:
            "Additional Google learning certificate included in my portfolio.",

        learning: [
            "Technology learning",
            "Data-related concepts",
            "Practical skills",
            "Professional development"
        ]

    },


    microsoft: {

        title:
            "Microsoft Certificate",

        issuer:
            "Microsoft",

        image:
            "microsoft.jpeg",

        about:
            "A Microsoft-related learning certificate showcasing additional technical exposure.",

        learning: [
            "Technology concepts",
            "Digital skills",
            "Problem solving",
            "Practical learning"
        ]

    },


    tata: {

        title:
            "Tata Certificate",

        issuer:
            "Tata",

        image:
            "tata1.jpeg",

        about:
            "A Tata certificate included in my professional learning portfolio.",

        learning: [
            "Professional skills",
            "Industry awareness",
            "Analytical thinking",
            "Problem solving"
        ]

    },


    cert5: {

        title:
            "Professional Certificate",

        issuer:
            "Certificate Program",

        image:
            "WhatsApp Image 2026-07-24 at 11.33.24 PM.jpeg",

        about:
            "A certificate representing participation in a learning experience.",

        learning: [
            "Skill development",
            "Learning experience",
            "Professional growth"
        ]

    },


    nccA: {

        title:
            "NCC Certificate — A",

        issuer:
            "National Cadet Corps",

        image:
            "ncc_A.jpg",

        about:
            "NCC certificate included as part of my extracurricular achievements.",

        learning: [
            "Discipline",
            "Teamwork",
            "Responsibility",
            "Leadership"
        ]

    },


    nccB: {

        title:
            "NCC B Certificate",

        issuer:
            "National Cadet Corps",

        image:
            "ncc_B.jpg",

        about:
            "NCC B Certificate representing participation and development through NCC activities.",

        learning: [
            "Discipline",
            "Leadership",
            "Teamwork",
            "Responsibility"
        ]

    },


    nccCamp: {

        title:
            "NCC Camp",

        issuer:
            "National Cadet Corps",

        image:
            "ncc_camp.jpeg",

        about:
            "NCC camp participation record included in my portfolio.",

        learning: [
            "Teamwork",
            "Discipline",
            "Leadership",
            "Organizational skills"
        ]

    }

};



/* ================= CERTIFICATE MODAL ================= */

const certificateModal =
    document.getElementById(
        "certificateModal"
    );


document
    .querySelectorAll(".certificate-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const key =
                    button.dataset.certificate;


                const data =
                    certificateData[key];


                if (!data) return;


                document.getElementById(
                    "modalCertificateTitle"
                ).textContent =
                    data.title;


                document.getElementById(
                    "modalCertificateAbout"
                ).textContent =
                    data.about;


                document.getElementById(
                    "modalCertificateIssuer"
                ).textContent =
                    data.issuer;


                const image =
                    document.getElementById(
                        "modalCertificateImage"
                    );


                image.src =
                    data.image;


                const learning =
                    document.getElementById(
                        "modalCertificateLearning"
                    );


                learning.innerHTML =
                    "";


                data.learning
                    .forEach(item => {

                        const li =
                            document.createElement(
                                "li"
                            );

                        li.textContent =
                            item;

                        learning.appendChild(
                            li
                        );

                    });


                document.getElementById(
                    "zoomCertificate"
                ).onclick =
                    () => {

                        openLightbox(
                            data.image
                        );

                    };


                openModal(
                    certificateModal
                );

            });

    });



/* ================= MODALS ================= */

function openModal(modal) {

    if (!modal) return;


    modal.classList.add(
        "active"
    );


    body.classList.add(
        "modal-open"
    );

}


function closeModal(modal) {

    if (!modal) return;


    modal.classList.remove(
        "active"
    );


    if (
        !document.querySelector(
            ".modal.active"
        )
    ) {

        body.classList.remove(
            "modal-open"
        );

    }

}


document
    .querySelectorAll("[data-close]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    button.dataset.close;


                closeModal(
                    document.getElementById(id)
                );

            });

    });


document
    .querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    closeModal(modal);

                }

            });

    });



/* ================= LIGHTBOX ================= */

const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


function openLightbox(src) {

    lightboxImage.src =
        src;


    lightbox.classList.add(
        "active"
    );

}


document
    .getElementById("closeLightbox")
    .addEventListener(
        "click",
        () => {

            lightbox.classList.remove(
                "active"
            );

        }
    );


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            lightbox.classList.remove(
                "active"
            );

        }

    }
);



/* ================= ESC KEY ================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            document
                .querySelectorAll(
                    ".modal.active"
                )
                .forEach(modal =>
                    closeModal(modal)
                );


            lightbox.classList.remove(
                "active"
            );


            commandPalette.classList.remove(
                "active"
            );

        }

    }
);



/* =========================================================
   COMMAND PALETTE
========================================================= */

const commandPalette =
    document.getElementById(
        "commandPalette"
    );


const commandBtn =
    document.getElementById(
        "commandBtn"
    );


const commandInput =
    document.getElementById(
        "commandInput"
    );


function openCommandPalette() {

    commandPalette.classList.add(
        "active"
    );


    setTimeout(
        () => commandInput.focus(),
        100
    );

}


function closeCommandPalette() {

    commandPalette.classList.remove(
        "active"
    );

}


commandBtn?.addEventListener(
    "click",
    openCommandPalette
);


document.addEventListener(
    "keydown",
    event => {

        if (
            (event.ctrlKey || event.metaKey)
            &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            openCommandPalette();

        }

    }
);


commandPalette.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            commandPalette
        ) {

            closeCommandPalette();

        }

    }
);


document
    .querySelectorAll(
        "[data-command]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    document.querySelector(
                        button.dataset.command
                    );


                closeCommandPalette();


                if (target) {

                    target.scrollIntoView({
                        behavior:
                            "smooth"
                    });

                }

            });

    });



/* ================= COMMAND SEARCH ================= */

commandInput?.addEventListener(
    "input",
    () => {

        const query =
            commandInput.value
                .toLowerCase()
                .trim();


        document
            .querySelectorAll(
                ".command-list button"
            )
            .forEach(button => {

                const text =
                    button.textContent
                        .toLowerCase();


                button.style.display =
                    text.includes(query)
                    ? "flex"
                    : "none";

            });

    }
);



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm?.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const subject =
            document
                .getElementById("subject")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            showToast(
                "Please fill all fields."
            );

            return;

        }


        const mailSubject =
            encodeURIComponent(
                subject
            );


        const mailBody =
            encodeURIComponent(
                `Hello Shikhar,

Name: ${name}
Email: ${email}

Message:

${message}`
            );


        window.location.href =
            `mailto:shikhar15aug@gmail.com?subject=${mailSubject}&body=${mailBody}`;


        showToast(
            "Opening your email application..."
        );


        contactForm.reset();

    }
);



/* ================= TOAST ================= */

const toast =
    document.getElementById(
        "toast"
    );


let toastTimer;


function showToast(message) {

    toast.querySelector(
        "span"
    ).textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}



/* ================= BACK TO TOP ================= */

document
    .querySelector(".back-top")
    ?.addEventListener(
        "click",
        event => {

            event.preventDefault();


            window.scrollTo({

                top:
                    0,

                behavior:
                    "smooth"

            });

        }
    );



/* ================= IMAGE ERROR ================= */

document
    .querySelectorAll("img")
    .forEach(img => {

        img.addEventListener(
            "error",
            () => {

                img.style.opacity =
                    ".3";

                console.warn(
                    "Image not found:",
                    img.src
                );

            });

    });



/* ================= CONSOLE ================= */

console.log(
    "%cSHIKHAR TIWARI",
    "font-size:20px;font-weight:bold;color:#ff6b35"
);

console.log(
    "%cFuturistic Portfolio initialized 🚀",
    "font-size:12px;color:#aaa"
);