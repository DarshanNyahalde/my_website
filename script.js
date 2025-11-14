// Smooth scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements that should animate
    const animateElements = document.querySelectorAll('.service-item, .service-card, .card, .info-item, .form-group');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Contact form handling with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Clear previous errors
            clearErrors();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            let isValid = true;

            // Validate name
            if (name === '') {
                showError('nameError', 'कृपया आपले नाव टाका');
                isValid = false;
            }

            // Validate phone
            if (phone === '') {
                showError('phoneError', 'कृपया आपला फोन नंबर टाका');
                isValid = false;
            } else if (!/^\d{10}$/.test(phone)) {
                showError('phoneError', 'कृपया वैध 10 अंकी फोन नंबर टाका');
                isValid = false;
            }

            // Validate message
            if (message === '') {
                showError('messageError', 'कृपया आपला संदेश टाका');
                isValid = false;
            }

            if (isValid) {
                // Show success message
                const successMessage = document.getElementById('successMessage');
                successMessage.textContent = `धन्यवाद ${name}! आपला संदेश प्राप्त झाला आहे. आम्ही लवकरच ${phone} वर संपर्क करू.`;
                successMessage.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
        document.getElementById('successMessage').style.display = 'none';
    }

    // Sticky header
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', stickyHeader);

    // Language switching functionality
    const translations = {
        marathi: {
            logo: "पांढरे टूर्स & रिअल इस्टेट",
            home: "मुख्यपृष्ठ",
            travels: "प्रवास",
            realestate: "रिअल इस्टेट",
            contact: "संपर्क",
            "hero-title": "आपल्या सर्व प्रवास आणि घर व्यवहारांची एकच ठिकाण!",
            "hero-subtitle": "बारामती, महाराष्ट्रात आपल्या सर्व प्रवास आणि रिअल इस्टेट गरजांसाठी विश्वासार्ह सेवा.",
            "travel-btn": "प्रवास सेवा",
            "realestate-btn": "रिअल इस्टेट सेवा",
            "about-title": "आमच्याबद्दल",
            "about-desc": "पांढरे टूर्स & रिअल इस्टेट आपल्या सर्व प्रवास आणि घर व्यवहारांची एकच ठिकाण आहे. आम्ही कार भाड्याने देणे, ड्रायव्हर ऑन हायर, टूर ऑर्गनायझ करणे, आणि रिअल इस्टेट सेवा प्रदान करतो.",
            "testimonials-title": "ग्राहकांचे अभिप्राय",
            testimonial1: "\"उत्तम सेवा! प्रवासासाठी कार भाड्याने घेतली आणि खूप समाधानकारक अनुभव झाला.\"",
            "testimonial1-author": "- राजेश पाटील",
            testimonial2: "\"रिअल इस्टेटमध्ये प्लॉट भाड्याने घेतला, सर्व प्रक्रिया सहज होती.\"",
            "testimonial2-author": "- स्मिता देशमुख",
            testimonial3: "\"ड्रायव्हर ऑन हायर सेवा खूप विश्वासार्ह आणि वेळेवर होती.\"",
            "testimonial3-author": "- अरविंद शिंदे",
            "gallery-title": "गॅलरी",
            "follow-title": "आम्हाला फॉलो करा",
            facebook: "Facebook",
            instagram: "Instagram",
            whatsapp: "WhatsApp",
            "realestate-title": "पांढरे रिअल इस्टेट",
            "realestate-heading": "पांढरे रिअल इस्टेट",
            "realestate-desc": "आपल्या घर व्यवहारांसाठी सर्वोत्तम सेवा",
            "contact-person1": "संतोष पांढरे",
            "contact-person2": "शिवम पांढरे",
            "contact-location": "ठिकाण",
            "contact-address": "बारामती, महाराष्ट्र, भारत"
        },
        english: {
            logo: "Pandhare Tours & Real Estate",
            home: "Home",
            travels: "Travels",
            realestate: "Real Estate",
            contact: "Contact",
            "hero-title": "Your one-stop solution for all travel and property needs!",
            "hero-subtitle": "Reliable services for all your travel and real estate needs in Baramati, Maharashtra.",
            "travel-btn": "Travel Services",
            "realestate-btn": "Real Estate Services",
            "about-title": "About Us",
            "about-desc": "Pandhare Tours & Real Estate is your one-stop solution for all travel and property needs. We provide car rental, driver on hire, tour organization, and real estate services.",
            "testimonials-title": "Customer Feedback",
            testimonial1: "\"Excellent service! Rented a car for travel and had a very satisfactory experience.\"",
            "testimonial1-author": "- Rajesh Patil",
            testimonial2: "\"Rented a plot in real estate, the entire process was smooth.\"",
            "testimonial2-author": "- Smita Deshmukh",
            testimonial3: "\"Driver on hire service was very reliable and on time.\"",
            "testimonial3-author": "- Arvind Shinde",
            "gallery-title": "Gallery",
            "follow-title": "Follow Us",
            facebook: "Facebook",
            instagram: "Instagram",
            whatsapp: "WhatsApp",
            "realestate-title": "Pandhare Real Estate",
            "realestate-heading": "Pandhare Real Estate",
            "realestate-desc": "Best services for your property needs",
            "travels-logo": "पांढरे टूर्स & ट्रॅव्हल्स",
            "travels-title": "Pandhare Tours & Travels",
            "travels-subtitle": "Best services for your travel needs",
            "contact-person1": "Santosh Pandhare",
            "contact-person2": "Shivam Pandhare",
            "contact-location": "Location",
            "contact-address": "Baramati, Maharashtra, India",
            // Travels page
            "car-rental": "Car Rental",
            "car-rental-desc": "Various types of cars available for rent",
            "driver-hire": "Driver on Hire",
            "driver-hire-desc": "Experienced drivers available",
            "tour-org": "Tour Organization",
            "tour-org-desc": "Organize tours to various places",
            "car-washing": "Daily Car Washing",
            "car-washing-desc": "Car cleaning and maintenance",
            "packages": "Packages",
            "daily-rent": "Daily Rent",
            "weekly-rent": "Weekly Rent",
            "tour-package": "Tour Package",
            "contact-us": "Contact Us",
            // Real Estate page
            "plot-rental": "Plot Rental / Lease",
            "plot-rental-desc": "Plot rental and lease services",
            "water-tank-cleaning": "Water Tank Cleaning",
            "water-tank-cleaning-desc": "Cleaning and maintenance of water tanks",
            "electrical-plumbing": "Electricals, Painting, Plumbing",
            "electrical-plumbing-desc": "Home electrical, painting, and plumbing services",
            "house-shifting": "House Shifting",
            "house-shifting-desc": "Help and services for house shifting",
            // Contact page
            "contact-title": "Contact Us",
            "contact-subtitle": "Use the information below to contact us",
            "send-message": "Send Message",
            "name-label": "Name *",
            "phone-label": "Phone Number *",
            "message-label": "Message *",
            "submit-btn": "Send",
            "whatsapp-contact": "Contact on WhatsApp"
        }
    };

    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update document language
        document.documentElement.lang = lang === 'marathi' ? 'mr' : 'en';

        // Update button states
        document.getElementById('lang-marathi').classList.toggle('active', lang === 'marathi');
        document.getElementById('lang-english').classList.toggle('active', lang === 'english');

    // Store language preference
    localStorage.setItem('selectedLanguage', lang);
    // Reload the page to persist the language change
    }

    // Language button event listeners
    document.getElementById('lang-marathi').addEventListener('click', () => switchLanguage('marathi'));
    document.getElementById('lang-english').addEventListener('click', () => switchLanguage('english'));

    // Load saved language preference
    const savedLang = localStorage.getItem('selectedLanguage') || 'english';
    switchLanguage(savedLang);
});
