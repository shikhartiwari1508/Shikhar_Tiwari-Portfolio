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
            "A Python-based student record management project designed to organize and manage student information.",

        technologies: [
            "Python",
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


    universeai: {

    title:
        "Universe AI",

    description:
        "An intelligent AI-powered assistant designed to provide smart conversations, answer questions, solve problems and assist users through cloud-based and locally running AI models.",

    technologies: [
        "Python",
        "FastAPI",
        "JavaScript",
        "HTML",
        "CSS",
        "Google Gemini API",
        "Ollama",
        "Llama 3.2",
        "SQLite",
        "Capacitor"
    ],

    working:
        "The application uses a frontend interface connected to a Python FastAPI backend. It integrates Google Gemini API for cloud-based AI responses and Ollama with Llama 3.2 for local AI processing. SQLite stores chat history, while the backend manages API requests, conversation context and file processing.",

    built:
        "A full-stack AI chatbot platform featuring intelligent conversations, cloud and local AI integration, chat history management, document uploads and an Android application interface.",

    features: [

        "AI-Powered Conversations",

        "Google Gemini Integration",

        "Local AI with Ollama",

        "Llama 3.2 Model Support",

        "Cloud & Local AI Switching",

        "Chat History Management",

        "New Chat Functionality",

        "Context-Aware Responses",

        "PDF & TXT File Upload",

        "FastAPI Backend",

        "SQLite Database",

        "Android App Support"

    ]

},


    smartfarm: {

        title:
            "SmartFarm AI",

        description:
            "An AI-powered smart agriculture platform designed to provide farmers with intelligent crop guidance, disease detection, irrigation recommendations and weather-based insights.",

        technologies: [
            "Python",
            "FastAPI",
            "React",
            "Vite",
            "Tailwind CSS",
            "JavaScript",
            "SQLite",
            "Gemini AI",
            "OpenWeatherMap"
        ],

        working:
            "The architecture uses a React frontend for user interaction and a Python/FastAPI backend for application logic. AI components process agricultural queries, while weather and crop-related data are used to provide intelligent farming recommendations.",

        built:
            "A modular smart agriculture platform covering crop recommendations, plant disease detection, irrigation guidance, weather insights, AI chat assistance and personalized farming recommendations.",

        features: [

            "Crop Recommendation",

            "Disease Detection",

            "Smart Irrigation",

            "Weather Insights",

            "AI Farming Assistant",

            "Crop Health Analysis",

            "Farming Recommendations",

            "AI Chat"

        ]

    },

    campusmindai: {

    title:
        "CampusMind AI",

    description:
        "An AI-powered campus complaint management platform designed to simplify student grievance reporting, automate complaint classification and help administrators resolve campus issues efficiently.",

    technologies: [
        "Python",
        "FastAPI",
        "React",
        "JavaScript",
        "SQLAlchemy",
        "SQLite",
        "JWT Authentication",
        "AI / NLP",
        "Gemini API"
    ],

    working:
        "The platform uses a React frontend for student and administrator interactions, a FastAPI backend for API management, and a database for storing user accounts and complaints. AI-based services automatically classify complaints, determine severity and urgency, recommend departments, and identify potentially duplicate complaints.",

    built:
        "A full-stack AI-powered campus complaint management system featuring student authentication, complaint submission, automated AI classification, duplicate complaint detection, public ticket tracking and administrator complaint management.",

    features: [

        "Student Registration & Login",

        "Secure JWT Authentication",

        "AI Complaint Classification",

        "Automatic Severity Detection",

        "Complaint Priority Management",

        "Duplicate Complaint Detection",

        "Department Recommendation",

        "Unique Complaint Ticket ID",

        "Student Complaint Tracking",

        "Admin Complaint Management",

        "Smart Campus Grievance System"

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
            "Devtown Certificate",

        issuer:
            "Devtown",

        image:
            "devtown_appreciation.jpeg",

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
            " Harvard Certificate",

        issuer:
            "Harvard",

        image:
            "harvard_certificate.jpeg",

        about:
            "A certificate representing additional learning and skill developmentin Data Science : Machine Learning.",

        learning: [
            "Data Science",
            "Machine learning",
            "Professional development"
        ]

    },


    cert3: {

        title:
            "Learning Certificate",

        issuer:
            "Tata",

        image:
            "tata.jpeg",

        about:
            "A certificate included as part of my academic and professional learning journey in GenAI Powered Data Analysis Job Simulation .",

        learning: [
            "GenAI",
            "Data Analysis",
            "Technical concepts",
            "Problem solving",
            "Continuous learning"
        ]

    },


    cert4: {

        title:
            "Big Data Certificate",

        issuer:
            "Digital Fluency",

        image:
            "bigdata_certificate.jpeg",

        about:
            "Certificate showcasing in a learning experience in Bigdata.",

        learning: [
            "Overview of Bigdata",
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
            "A Google certificate included in my professional learning portfolio, In this program we can learn the 'Introduction to GenAI'.",

        learning: [
            "GenAI concepts",
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
            "A Deloitte certificate representing professional learning and development in Cyber Job Simulation.",

        learning: [
            "Cyber Job Simulation",
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
            "Additional Google learning certificate included in my portfolio, and we can lenrn the Introduction of GenAI Studio.",

        learning: [
            "Introduction to GenAI Studio",
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
            "A Microsoft-related learning certificate showcasing additional technical exposure , In this program we can learn the Introduction of Prompt Engineering with Github Copilot.",

        learning: [
            "Introduction to Prompt Engineering with GitHub Copilot",
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
            "A Tata certificate included in my professional learning portfolio and gain my Data Visulization skills.",

        learning: [
            "Data Visulization",
            "Professional skills",
            "Industry awareness",
            "Analytical thinking",
            "Problem solving"
        ]

    },


    cert5: {

        title:
            "UI & UX Certificate",

        issuer:
            "Udemy",

        image:
            "udemy.jpeg",

        about:
            "A certificate representing participation in a learning experience and earning the skill in data quality, data management and data governance .",

        learning: [
            "UI Design",
            "Data Quality",
            "Data Management",
            "Data Governance",
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

    },

    cert6: {

        title:
            "Quantum technologies for Under Water Robot Sensing & PNT",

        issuer:
            "NIT Raipur",

        image:
            "NIT_Raipur.jpeg",

        about:
            "A certificate representing participation in a learning experience and earning the skill in Quantum technologies in Under water robot sensing and PNT .",

        learning: [
            "Quantum Technologies",
            "Under Water Robot Sensing",
            "PNT",
            "Skill development",
            "Learning experience",
            "Professional growth"
        ]

    },

    cert7: {

        title:
            "AI/ML for Geodata Analytics",

        issuer:
            "ISRO (IIRS Dehradoon)",

        image:
            "ISRO.jpeg",

        about:
            "A certificate representing participation in a learning experience and earning the skill in Geograhical data analysis using Artificial Intrlligence and Machine Learning .",

        learning: [
            "Artificial Intelligence",
            "Machine Learning",
            "Geographical Data",
            "Data Analytics",
            "Skill development",
            "Learning experience",
            "Professional growth"
        ]

    },

    cert8: {

        title:
            "Viksit Bharat Young Leader Dialouge 2027",

        issuer:
            "Ministry of Youth Affairs & Sports",

        image:
            "my_bharat.jpeg",

        about:
            "A certificate representing participation in a learning experience and earning the skill in Viksit Bharat Young Leader Dialouge .",

        learning: [
            "Skill development",
            "Learning experience",
            "Professional growth"
        ]

    },

    cert9: {

        title:
            "SkillQuest - Generative AI Literacy",

        issuer:
            "Simplilearn",

        image:
            "simplilearn.jpeg",

        about:
            "A certificate representing participation in a learning experience and earning the skill in Generative AI Literacy  .",

        learning: [
            "Geneartive AI",
            "Artificial Intelligence",
            "Skill development",
            "Learning experience",
            "Professional growth"
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