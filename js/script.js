// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Functionality
    initMobileMenu();
    
    // Theme Toggle Functionality
    initThemeToggle();
    
    // Scroll Effects
    initScrollEffects();
    
    // Partners Carousel
    initPartnersCarousel();
    
    // Initialize Parallax Effect
    initParallax();
    
    // Initialize Video on Hover
    initVideoHover();
    
    // Initialize stat counters
    initStatsCounter();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize Hero Particles
    initHeroParticles();
    
    // Initialize Journey Animation
    initJourneyAnimation();
    
    console.log('All script functions initialized');
});

// Initialize Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let scrollTimer;
    
    // Handle scroll events with debounce for performance
    window.addEventListener('scroll', function() {
        if (scrollTimer) clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 100);
    });
    
    // Initial check
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
}

// Initialize Mobile Menu
function initMobileMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    
    if (!hamburgerMenu || !mobileMenu) {
        console.error('Mobile menu elements not found');
        return;
    }
    
    console.log('Mobile menu initialized');
    
    // Toggle menu when hamburger is clicked
    hamburgerMenu.addEventListener('click', function(e) {
        console.log('Hamburger clicked');
        e.preventDefault();
        hamburgerMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Update ARIA attributes
        const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
        hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
    });
    
    // Close mobile menu when clicking mobile menu links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
    mobileMenuLinks.forEach(link => {
        if (!link.classList.contains('mobile-theme-label')) {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('menu-open');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            });
        }
    });
}

// Initialize Theme Toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (!themeToggle) {
        console.error('Theme toggle element not found');
        return;
    }
    
    console.log('Theme toggle initialized');
    
    // Set initial theme from localStorage
    htmlElement.setAttribute('data-theme', savedTheme);
    
    // Handle theme toggle click
    themeToggle.addEventListener('click', function(e) {
        console.log('Theme toggle clicked');
        e.preventDefault();
        
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Handle mobile theme label click
    const mobileThemeLabel = document.querySelector('.mobile-theme-label');
    if (mobileThemeLabel) {
        mobileThemeLabel.addEventListener('click', function(e) {
            console.log('Mobile theme label clicked');
            e.preventDefault();
            
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Initialize Partners Carousel with Professional UX Standards
function initPartnersCarousel() {
    const carousel = document.getElementById('partnersCarousel');
    if (!carousel) return;

    // Partner logos data
    let partnerData = [];
    if (typeof websiteData !== 'undefined' && websiteData.partners) {
        partnerData = websiteData.partners;
    } else {
        partnerData = [
            { name: "PAARN", logo: "assets/images/1.jpg" },
            { name: "SIMCUBATOR", logo: "assets/images/2.jpg" },
            { name: "SUSTAINLAB", logo: "assets/images/3.jpg" },
            { name: "FABLAB", logo: "assets/images/4.jpg" }
        ];
    }

    // Duplicate the logos for seamless infinite scroll (at least twice)
    const allPartners = [...partnerData, ...partnerData, ...partnerData];

    // Create ticker track
    const tickerTrack = document.createElement('div');
    tickerTrack.className = 'ticker-track';

    allPartners.forEach((partner) => {
        const slide = document.createElement('div');
        slide.className = 'partner-slide';
        const logoContainer = document.createElement('div');
        logoContainer.className = 'partner-logo-container';
        const logo = document.createElement('img');
        logo.className = 'partner-logo';
        logo.src = partner.logo;
        logo.alt = partner.name + ' Logo';
        logo.loading = 'lazy';
        logoContainer.appendChild(logo);
        slide.appendChild(logoContainer);
        tickerTrack.appendChild(slide);
    });

    carousel.innerHTML = '';
    carousel.appendChild(tickerTrack);

    // --- JavaScript-powered endless scroll ---
    let pos = 0;
    let tickerWidth = 0;
    let isPaused = false;
    let speed = 0.8; // px per frame, slower for better visibility
    let animationId;

    function updateTickerWidth() {
        // The width of one set of logos
        tickerWidth = 0;
        const slides = tickerTrack.querySelectorAll('.partner-slide');
        for (let i = 0; i < partnerData.length; i++) {
            tickerWidth += slides[i].offsetWidth;
        }
        // Ensure tickerTrack is at least twice as wide as the visible area
        if (tickerWidth < carousel.offsetWidth * 2) {
            tickerWidth = carousel.offsetWidth * 2;
        }
    }

    function animate() {
        if (!isPaused) {
            pos -= speed;
            if (pos <= -tickerWidth) {
                pos = 0;
            }
            tickerTrack.style.transform = `translateX(${pos}px)`;
        }
        animationId = requestAnimationFrame(animate);
    }

    // Pause on hover for better UX
    carousel.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    carousel.addEventListener('mouseleave', () => {
        isPaused = false;
    });

    // Pause on touch for mobile devices
    carousel.addEventListener('touchstart', () => {
        isPaused = true;
    });

    carousel.addEventListener('touchend', () => {
        setTimeout(() => {
            isPaused = false;
        }, 1000);
    });

    // Initialize
    updateTickerWidth();
    animate();

    // Update on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateTickerWidth();
        }, 250);
    });

    // Adjust speed based on screen size
    function adjustSpeed() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 400) {
            speed = 0.5; // Slower for very small screens
        } else if (screenWidth <= 600) {
            speed = 0.6; // Slower for small screens
        } else if (screenWidth <= 768) {
            speed = 0.7; // Medium for tablets
        } else {
            speed = 0.8; // Normal for desktop
        }
    }

    // Initial speed adjustment
    adjustSpeed();

    // Adjust speed on resize
    window.addEventListener('resize', adjustSpeed);

    // Cleanup function
    return () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    };
}

// Initialize Parallax Effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    if (parallaxElements.length === 0) return;
    
    function parallaxScroll() {
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(window.scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    window.addEventListener('scroll', parallaxScroll);
    parallaxScroll(); // Initial run
}

// Initialize Video Hover with Sound
function initVideoHover() {
    const videoContainer = document.querySelector('.problem__video-container');
    const video = document.getElementById('youtube-video');
    let player;
    
    if (!video) return;
    
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-video', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };
    
    function onPlayerReady(event) {
        // Video is ready, set up hover events
        videoContainer.addEventListener('mouseenter', function() {
            event.target.playVideo();
            event.target.unMute();
        });
        
        videoContainer.addEventListener('mouseleave', function() {
            event.target.pauseVideo();
        });
    }
    
    function onPlayerStateChange(event) {
        // Handle player state changes if needed
    }
}

// Initialize Stat Counters with IntersectionObserver
function initStatsCounter() {
    const statElements = document.querySelectorAll('[data-count]');
    
    if (statElements.length === 0) return;
    
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const countTo = parseInt(element.dataset.count, 10);
                let startTime;
                const duration = 2000;
                
                function animate(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function for more natural counting
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const current = Math.floor(countTo * easeOutQuart);
                    
                    element.textContent = current.toLocaleString();
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        observer.unobserve(element);
                    }
                }
                
                requestAnimationFrame(animate);
            }
        });
    }, options);
    
    statElements.forEach(el => observer.observe(el));
}

// Initialize Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.error('Contact form element not found');
        return;
    }
    
    console.log('Contact form initialized');
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject')?.value.trim() || 'Contact Form Submission';
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            showFormMessage('Please fill all required fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Normally, you would send data to a server here
        // For demo purposes, we're just simulating success
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate API call
        setTimeout(() => {
            // Show success message
            showFormMessage('Message sent successfully! We will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Restore button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }, 1500);
    });
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show form messages
    function showFormMessage(message, type) {
        // Check if message element already exists, remove if it does
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type === 'error' ? 'form-message--error' : 'form-message--success'}`;
        messageElement.textContent = message;
        
        // Insert after submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.parentNode.insertBefore(messageElement, submitBtn.nextSibling);
        
        // Auto remove after delay
        setTimeout(() => {
            messageElement.classList.add('form-message--fade');
            setTimeout(() => {
                messageElement.remove();
            }, 300);
        }, 5000);
    }
}

// Initialize Hero Particles
function initHeroParticles() {
    const heroParticles = document.querySelector('.hero__particles');
    if (!heroParticles) return;

    // Number of particles to create
    const particleCount = 20; 

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        createParticle(heroParticles);
    }
}

// Create a single particle
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 3 and 8px
    const size = Math.random() * 5 + 3; 
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Random opacity and delay
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    // Random animation duration between 10 and 20 seconds
    const duration = Math.random() * 10 + 10;
    particle.style.animation = `float ${duration}s infinite ease-in-out ${Math.random() * 5}s`;
    
    // Add to container
    container.appendChild(particle);
}

// Initialize Journey Animation
function initJourneyAnimation() {
    const journeyItems = document.querySelectorAll('.journey-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Delay each animation by 200ms multiplied by its index
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, 200 * index);
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px', // Start animation a bit before the element is fully in view
        threshold: 0.1
    });
    
    journeyItems.forEach(item => {
        observer.observe(item);
    });
} 
