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

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "UI Designer", "Business Analyst", "Data Analyst"], // Add your changing words here
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Creative Thinker", "Problem Solver", "Quick Learner"], // Add more descriptive words here
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

// About me tabs
function opentab(tabName) {
    const tabContents = document.querySelectorAll('.tab-contents');
    const tabLinks = document.querySelectorAll('.tab-links');

    // Remove active classes from all tabs and links
    tabContents.forEach((tab) => tab.classList.remove('active-tab'));
    tabLinks.forEach((link) => link.classList.remove('active-link'));

    // Add active class to the selected tab and link
    document.getElementById(tabName).classList.add('active-tab');
    document.querySelector(`[onclick="opentab('${tabName}')"]`).classList.add('active-link');
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
