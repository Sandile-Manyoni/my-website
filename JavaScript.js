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

// Tab functionality
    function opentab(tabName) {
        const tabContents = document.querySelectorAll('.tab-contents');
        const tabLinks = document.querySelectorAll('.tab-links');
        
        // Remove active classes from all tabs and links
        tabContents.forEach((tab) => tab.classList.remove('active-tab'));
        tabLinks.forEach((link) => link.classList.remove('active-link'));
        
        // Add active class to the selected tab and link
        document.getElementById(tabName).classList.add('active-tab');
        event.currentTarget.classList.add('active-link');
    }

// Function to animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.bars .line::before');
    skillBars.forEach((bar) => {
        const width = bar.dataset.width;
        bar.style.width = width;
    });
}

// Initialize skill bars on page load
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
});

    // owl carousel script
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
