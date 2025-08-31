// ===================================
// ANIMATION DE PARTICULES FLOTTANTES
// ===================================
// Génère dynamiquement des particules visuelles qui se déplacent à l'écran

function createParticles(){
    const particlesContainer = document.getElementById('particles'); // On crée une variable pour le conteneur des particules
    
    const particleCount =50; // On crée une variable pour le nombre de particules

    for(let i = 0; i<particleCount; i++){ // boucle de la variable i qui commence à 0 et rajoute 1 tant que i est inferieur à particleCount qui est de 50
        const particle = document.createElement('div'); // On crée une div pour chaque particule
        particle.className = 'particle'; // On récupére la class particle du css et on l'ajoute à la div
        particle.style.left = Math.random() * 100 + '%'; // On crée une variable pour la position de la particule aléatoirement en 0 et 100
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's'; // On crée une variable pour la duree de l'animation de la particule aléatoirement entre 10 et 20 secondes
        particlesContainer.appendChild(particle); // On ajoute la particule au conteneur
    }
}

// =========================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// =========================================
// Lance les animations des particules et l'effet typewriter après le chargement complet

window.addEventListener('load', function(){ // On lance la fonction lorsque la page est chargée
    createParticles(); // On crée les particules

    setTimeout(() => {
        const subtitle = document.querySelector('.neon-subtitle'); // On crée une variable pour le sous-titre en prenant la class CSS

        if(subtitle){ // Si le sous-titre existe
            const originalText = subtitle.textContent; // On crée une variable pour stocker le texte du sous-titre
            typewriter(subtitle, originalText, 80); // On lance l'effet typewriter
        }
    }, 1000); // On attend 1 seconde avant de lancer l'effet
});


// =========================================
// ACTIVATION DES CARTES POUR "FORMATION"
// =========================================

const formation2 = document.getElementById('formation2');
const formation3 = document.getElementById('formation3');
const formation4 = document.getElementById('formation4');
const formation5 = document.getElementById('formation5');
const formation6 = document.getElementById('formation6');


const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const dot4 = document.getElementById('dot4');
const dot5 = document.getElementById('dot5');
const dot6 = document.getElementById('dot6');

document.querySelectorAll('.formation-timeline-dot').forEach(item => { // On parcourt tous les éléments de portfolio
    const formation1 = document.getElementById('formation1');
    const dot1 = document.getElementById('dot1');
    item.addEventListener('click', function (e) { // Quand la souris est sur l'element
        e.preventDefault();
        if (item === dot1) {
            const currentOpacity = getComputedStyle(formation1).opacity;
            if (currentOpacity  === '0') {
                formation1.style.opacity = '1';
                formation1.style.transform = 'scale(1)';
                formation1.style.transform = 'translate(-100px)'
            }
            else {
                formation1.style.opacity = '0';
                formation1.style.transform = 'scale(0.1)';
                formation1.style.transform = 'translate(100px)'
            }
        }

        if (item === dot2) {
            const currentOpacity = getComputedStyle(formation2).opacity;
            if (currentOpacity  === '0') {
                formation2.style.opacity = '1';
                formation2.style.transform = 'scale(1)';
                formation2.style.transform = 'translate(100px)'
            }
            else {
                formation2.style.opacity = '0';
                formation2.style.transform = 'scale(0.1)';
                formation2.style.transform = 'translate(-100px)'
            }
        }

        if (item === dot3) {
            const currentOpacity = getComputedStyle(formation3).opacity;
            if (currentOpacity  === '0') {
                formation3.style.opacity = '1';
                formation3.style.transform = 'scale(1)';
                formation3.style.transform = 'translate(-100px)'
            }
            else {
                formation3.style.opacity = '0';
                formation3.style.transform = 'scale(0.1)';
                formation3.style.transform = 'translate(100px)'
            }
        }

        if (item === dot4) {
            const currentOpacity = getComputedStyle(formation4).opacity;
            if (currentOpacity  === '0') {
                formation4.style.opacity = '1';
                formation4.style.transform = 'scale(1)';
                formation4.style.transform = 'translate(100px)'
            }
            else {
                formation4.style.opacity = '0';
                formation4.style.transform = 'scale(0.1)';
                formation4.style.transform = 'translate(-100px)'
            }
        }

        if (item === dot5) {
            const currentOpacity = getComputedStyle(formation5).opacity;
            if (currentOpacity  === '0') {
                formation5.style.opacity = '1';
                formation5.style.transform = 'scale(1)';
                formation5.style.transform = 'translate(-100px)'
            }
            else {
                formation5.style.opacity = '0';
                formation5.style.transform = 'scale(0.1)';
                formation5.style.transform = 'translate(100px)'
            }
        }

        if (item === dot6) {
            const currentOpacity = getComputedStyle(formation6).opacity;
            if (currentOpacity  === '0') {
                formation6.style.opacity = '1';
                formation6.style.transform = 'scale(1)';
                formation6.style.transform = 'translate(100px)'
            }
            else {
                formation6.style.opacity = '0';
                formation6.style.transform = 'scale(0.1)';
                formation6.style.transform = 'translate(-100px)'
            }
        }
    });
})


// =========================================
// TRADUCTION DE LA PAGE
// =========================================
const translation = {
    fr: {
        //Navbar
        home: "Accueil",
        me: "À propos de moi",
        skills: "Compétences",
        experience: "Expériences professionnelles",
        formation: "Formation",
        hobby: "Centres d'intérêt",

        //Hero
        "hero-subtitle": "Apprenant Concepteur Designer UI • Jeux Vidéo",
        "hero-description": "Créateur de narrations originales et immersives ainsi que d'interface utilisateur pour le web et l'industrie du jeu vidéo. Passionné par l'alliance entre narration et l'expérience utilisateur.",
        "view-portfolio": "Voir Portfolio",

        ///About
        "about-title": "À PROPOS DE MOI",
        "about-text": "Diplômé d'une licence en Histoire à l'université Aix-Marseille, ainsi qu'apprenant en Conception et Design en UI. Je me spécialise dans la création de jeux-vidéo mais aussi de site internet. Combinant mon sens artistique avec mes qualités d'écritures et mes compétences en code afin de créer les meilleures expériences possibles.",
        "personal-info": "Informations personnelles",
        age: "Âge :",
        phone: "Téléphone :",
        email: "Adresse mail :",
        expertise: "Domaines de compétences",
        "ui-design": "Interface utilisateur (UI)",
        "frontend-dev": "Développement frontend",

        //SKILLS
        "skills-title": "COMPÉTENCES",
        //Logiciel
        software: "Logiciels",
        "software-title": "LOGICIELS",
        office: "Bureautique",
        editing: "Montage Vidéo",
        graphic: "Graphisme",
        jv: "Création de jeux vidéo",
        web: "Site Internet",
        "web-plus": "Word Press, Figma (maquettage), Asana et Trello (travail collectif)",
        //Rédaction
        redaction: "Rédaction",
        "redaction-title": "RÉDACTION",
        "redaction-1-1": "Rédiger des textes structurés et cohérents",
        "redaction-1-2": "Structurer une narration en points clefs afin de rendre le tout cohérent",
        "redaction-1-3": "Structurer une pensée en idées principales puis les accorder dans un texte afin de rendre le tout cohérent",
        "redaction-2-1": "Faire du travail de synthèse",
        "redaction-2-2": "Recherche d'informations (archives papiers ou numériques)",
        "redaction-2-3": "Synthétiser des idées et les reformuler pour qu'elles soient facilement compréhensible pour tous",
        "redaction-3-1": "Écrire et composer une histoire",
        "redaction-3-2": "Créer la structure narrative d'une histoire",
        "redaction-3-3": "Adapter une histoire à son format (jeux vidéo, film, roman, BD)",
        "redaction-3-4": "Rédiger une histoire dans un langage approprié",
        //Design
        "design-1-1": "Jeu vidéo",
        "design-1-2": "Narrative Design : Écrire des scénarii cohérents à la fois eux-même et avec leur gameplay",
        "design-1-3": "Level Design : Concevoir des niveaux structurés et thématisés",
        "design-1-4": "Quest Design : Créer des quêtes ludiques et interactives",
        "design-2-1": "Réaliser un Moodboard",
        "design-2-2": "Créer une charte graphique",
        //Langage Infomatique
        "code": "Langage Informatique",
        "code-title": "LANGAGE INFORMATIQUE",
        "code-1": "JavaScript (Débutant)",
        "code-2": "Python et C# (Initiation)",

        //EXPÉRIENCE PRO
        "experience-title": "EXPÉRIENCES PROFESSIONNELLES",
        "xp-1-1": "Assistant documentaliste",
        "xp-1-2": "CNAHES PACA • Septembre 2023 - Juin 2024",
        "xp-1-3": "Première grosse expérience professionnelle. Collaboration avec diverses associations. Diverses activités (création de panneaux d'exposition, montage vidéo, rédaction).",

        //FORMATION
        "formation-title": "FORMATIONS",
        "formation-1-1": "Formation Concepteur Designer UI",
        "formation-1-2": "MODE83, Draguignan • Avril 2025 - présent",
        "formation-1-3": "Apprentissage théorique du design. Mise en pratique avec de mini-projet concret. Prise en main de logiciels professionnelles (suite Adobe). Création d'un projet individuel à présenter à un jury. Développement, en parallèle, d'un petit jeu-vidéo.",
        "formation-1-4": "Avril 2025 - Présent",
        "formation-2-1": "Formation Testeur Logiciel ISTQB",
        "formation-2-2": "MODE83, Draguignan • Mars - Avril 2025",
        "formation-2-3": "Découverte de la méthodologie de test logiciels ainsi que du vocabulaire associé. Apprentissage de méthodes de travail agiles.",
        "formation-2-4": "Mars - Avril 2025",
        "formation-3-1": "Première année de Master Histoire-Civilisation-Patrimoine",
        "formation-3-2": "Aix-Marseille-Université, Aix-en-Provence • 2021 - 2022",
        "formation-3-3": "Développement de mes capacités de recherches. Travail en autonomie. Haussement des exigences.",
        "formation-3-4": "Septembre 2021 - Juin 2022",
        "formation-4-1": "Obtention d'une Licence d'Histoire renforcée",
        "formation-4-2": "Aix-Marseille-Université, Aix-en-Provence • 2018 - 2021",
        "formation-4-3": "Compétences en rédaction, analyses et présentations. Développement d'un esprit critique et de connaissances large et diverses.",
        "formation-4-4": "Septembre 2018 - Juin 2021",
        "formation-5-1": "Première année d'IUT Informatique",
        "formation-5-2": "Université de Nice, Nice • 2017 - 2018",
        "formation-5-3": "Premières compétences en informatique. Découverte du vocabulaire ainsi que de certains outils.",
        "formation-5-4": "Septembre 2017 - Juin 2018",
        "formation-6-1": "Obtention d'un Baccalauréat Scientifique, Science de la Vie et de la Terre",
        "formation-6-2": "Institution Sainte Jeanne d'Arc, Brignoles • 2017",
        "formation-6-3": "Acquisition des compétences pour avoir un Baccalauréat.",
        "formation-6-4": "Juin 2017",

        //HOBBIES
        "hobby-title": "CENTRES D'INTÉRÊT",
        "hobby-1-1": "Arts Créatifs",
        "hobby-1-2": "Dessin (traditionnel et numérique) et écriture de scénarii (jeux vidéo, roman, webtoon, jeux de rôle, ...)",
        "hobby-2-1": "Jeux vidéo",
        "hobby-2-2": "Joueur, suivi de l'actualité (sorties, technologies,...) et critiques",
        "hobby-3-1": "Sport",
        "hobby-3-2": "Course (2 fois le 20km de Nice et Marathon en relais (15km)) et sport en club (Basket (3ans) et Aïkido (3ans))",
        "hobby-4-1": "Lecture",
        "hobby-4-2": "Romans, BD, Poèmes, Manga, Webtoon",

         //PORTFOLIO
         "portfolio-title" : "PORTFOLIO",

         //CONTACT
         "contact-title": "CONTACTEZ MOI",
         "contact-email-title": "Mail",
         "contact-phone-title": "Téléphone",
         "contact-location-title": "Localisation",
         "contact-location-value": "Garéoult, Var",

         //FORMULAIRE
         "form-name": "Entrez votre nom complet ici...",
         "form-email": "Entrez votre adresse mail ici...",
         "form-sujet": "Entrez le sujet de votre message ici...",
         "form-message": "Entrez votre message ici..."

    },

    en: {
        home: "Home",
        me: "About me",
        skills: "Skills",
        experience: "Professional experience",
        formation: "Formation",
        hobby: "Hobbies",

        //Hero
        "hero-subtitle": "Apprentice Designer UI • Video Games",
        "hero-description": "Creator of original and immersive narratives as well as user interfaces for the web and the video game industry. Passionate about the alliance between storytelling and user experience.",
        "view-portfolio": "See Portfolio",

        ///About
        "about-title": "ABOUT ME",
        "about-text": "Graduated with a Bachelor's degree in History from Aix-Marseille University, as well as learning in UI Conception and Design. I specialize in creating video games and websites. Combining my artistic sense with my writing and coding skills to create the best possible experiences.",
        "personal-info": "Personal information",
        age: "Age :",
        phone: "Phone :",
        email: "E-mail :",
        expertise: "Areas of skills",
        "ui-design": "User interface (UI)",
        "frontend-dev": "Frontend development",

        //SKILLS
        "skills-title": "SKILLS",
        //Logiciel
        software: "Software",
        "software-title": "SOFTWARE",
        office: "Office",
        editing: "Video editing",
        graphic: "Graphic",
        jv: "Video game creation",
        web: "Website",
        "web-plus": "Word Press, Figma (mockup), Asana et Trello (collective work)",
        //Rédaction
        redaction: "Redaction",
        "redaction-title": "REDACTION",
        "redaction-1-1": "Write structured and coherent texts",
        "redaction-1-2": "Structure a narrative into key points to make the whole thing coherent",
        "redaction-1-3": "Structure a thought into main ideas and then bring them together in a text to make the whole coherent",
        "redaction-2-1": "Do synthesis work",
        "redaction-2-2": "Information search (paper or digital archives)",
        "redaction-2-3": "Synthesize ideas and reformulate them so that they are easily understandable for everyone",
        "redaction-3-1": "Write and compose a story",
        "redaction-3-2": "Create the narrative structure of a story",
        "redaction-3-3": "Adapt a story to its format (video games, film, novel, comic book)",
        "redaction-3-4": "Write a story in appropriate language",
        //Design
        "design-1-1": "Video game",
        "design-1-2": "Narrative Design : Write scenarios that are consistent with both themselves and their gameplay",
        "design-1-3": "Level Design : Design structured and themed levels",
        "design-1-4": "Quest Design : Create fun and interactive quests",
        "design-2-1": "Realize a Moodboard",
        "design-2-2": "Create a graphic charter",
        //Langage Infomatique
        "code": "Computer language",
        "code-title": "COMPUTER LANGUAGE",
        "code-1": "JavaScript (Beginner)",
        "code-2": "Python and C# (Initiation)",

        //EXPÉRIENCE PRO
        "experience-title": "PROFESSIONAL EXPERIENCES",
        "xp-1-1": "Documentalist assistant",
        "xp-1-2": "CNAHES PACA • September 2023 - June 2024",
        "xp-1-3": "First major professional experience. Collaboration with various associations. Various activities (creation of exhibition panels, video editing, redaction).",

        //FORMATION
        "formation-title": "FORMATIONS",
        "formation-1-1": "UI Designer Formation",
        "formation-1-2": "MODE83, Draguignan • April 2025 - now",
        "formation-1-3": "Theoretical design learning. Practical application with concrete mini-projects. Getting started with professional software (Adobe suite). Creation of an individual project to present to a jury. Development, in parallel, of a small video game.",
        "formation-1-4": "April 2025 - now",
        "formation-2-1": "ISTQB Software Tester Training",
        "formation-2-2": "MODE83, Draguignan • March - April 2025",
        "formation-2-3": "Discover software testing methodology and associated vocabulary. Learn agile working methods.",
        "formation-2-4": "March - April 2025",
        "formation-3-1": "First year of Master's in History-Cultures-Societes",
        "formation-3-2": "Aix-Marseille-University, Aix-en-Provence • 2021 - 2022",
        "formation-3-3": "Developing my research skills. Working independently. Raising standards.",
        "formation-3-4": "September 2021 - June 2022",
        "formation-4-1": "Obtaining a reinforced History Bachelor's degree",
        "formation-4-2": "Aix-Marseille-University, Aix-en-Provence • 2018 - 2021",
        "formation-4-3": "Writing, analysis and presentation skills. Development of critical thinking and broad and diverse knowledge.",
        "formation-4-4": "September 2018 - June 2021",
        "formation-5-1": "First year of IUT Computer Science",
        "formation-5-2": "Nice University, Nice • 2017 - 2018",
        "formation-5-3": "First computer skills. Discovery of vocabulary as well as certain tools",
        "formation-5-4": "September 2017 - June 2018",
        "formation-6-1": "Obtaining a Scientific high school diploma, biology option",
        "formation-6-2": "Sainte Jeanne d'Arc Institution, Brignoles • 2017",
        "formation-6-3": "Acquisition of skills to obtain a high school diploma.",
        "formation-6-4": "June 2017",

        //HOBBIES
        "hobby-title": "HOBBIES",
        "hobby-1-1": "Creative Arts",
        "hobby-1-2": "Drawing (traditional and digital) and script writing (video games, novels, webtoons, role-playing games, etc.)",
        "hobby-2-1": "Video games",
        "hobby-2-2": "Player, follow the news (releases, technologies, etc.) and reviews",
        "hobby-3-1": "Sport",
        "hobby-3-2": "Running (2 times the 20km of Nice and Marathon in relay (15km)) and club sports (Basketball (3 years) and Aikido (3 years))",
        "hobby-4-1": "Reading",
        "hobby-4-2": "Novels, BD, Poems, Manga, Webtoon",

         //PORTFOLIO
         "portfolio-title" : "PORTFOLIO",

         //CONTACT
         "contact-title": "CONTACT ME",
         "contact-email-title": "E-Mail",
         "contact-phone-title": "Phone",
         "contact-location-title": "Location",
         "contact-location-value": "Garéoult, Var (France)",

         //FORMULAIRE
         "form-name": "Enter your full name here...",
         "form-email": "Enter your email address here...",
         "form-sujet": "Enter the subject of your message here...",
         "form-message": "Enter your message here..."
    }
};

function setLanguage(lang) {
    //Récupérer les éléments classiques
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        el.textContent = translation[lang][key] || key;
    });

    //Récupérer les éléments placeholder
    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
        const key = el.getAttribute("data-translate-placeholder");
        el.setAttribute("placeholder", translation[lang][key] || key);
    });

    //Sauvegarder le choix de l'utilisater
    localStorage.setItem("language", lang);
}

// Créer les événements aux boutons
document.getElementById("btn-fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

// Changer la pcédente langue OU fr par défaut
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "fr";
    setLanguage(savedLang);
});