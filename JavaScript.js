$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

        // Update typing animations
    var typed = new Typed(".typing", {
        strings: ["Business Intelligence Developer", "Software Developer", "BI Analyst", "Data Analyst", "ICT Lecturer", "Database Specialist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Data Expert", "Problem Solver", "Lifelong Learner", "Mentor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

// Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all tabs and links
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Initialize first tab as active if none is active
    if (document.querySelectorAll('.tab-link.active').length === 0) {
        tabLinks[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
});

// Owl carousel script
$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

    // Animate skill bars when Skills tab is clicked
    document.querySelector('[data-tab="skills"]').addEventListener('click', () => {
        const skillBars = document.querySelectorAll('.bars .line::before'); // this won't work
        // So instead, animate using class manipulation or JS
        const skillLines = document.querySelectorAll('.bars .line');
        skillLines.forEach(line => {
            const before = window.getComputedStyle(line, '::before');
            // Unfortunately ::before cannot be modified directly via JS
            // CSS already sets it based on class, so no JS is required here
        });
    });
});



// Project Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Open modal when project button is clicked
    const projectBtns = document.querySelectorAll('.project-btn');
    projectBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('href');
            const modal = document.querySelector(modalId);
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Add animation
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        });
    });

    // Close modal when X is clicked
    const closeModals = document.querySelectorAll('.close-modal');
    closeModals.forEach(close => {
        close.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = this.closest('.project-modal');
            
            // Add closing animation
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        });
    });

    // Close modal when clicking outside content
    const modals = document.querySelectorAll('.project-modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                // Add closing animation
                this.style.opacity = '0';
                setTimeout(() => {
                    this.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        });
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.project-modal[style*="display: block"]');
            if (openModal) {
                // Add closing animation
                openModal.style.opacity = '0';
                setTimeout(() => {
                    openModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        }
    });
});
