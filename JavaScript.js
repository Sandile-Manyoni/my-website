$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // About me tabs

    $(document).ready(function() {
        $(".tab-links").click(function(event) {
            var tabname = event.currentTarget.getAttribute("data-tab");
            $(".tab-links").removeClass("active-link");
            $(".tab-contants").removeClass("active-tab");
            $(this).addClass("active-link");
            $("#" + tabname).addClass("active-tab");
        });
    });
    

    // function opentab(tabName) {
    //     var i, tabcontent, tablinks;
    
    //     // remove the active-tab class from all tab contents
    //     tabcontent = document.getElementsByClassName("column right");
    //     for (i = 0; i < tabcontent.length; i++) {
    //         tabcontent[i].classList.remove("active-tab");
    //     }
    
    //     // remove the active-link class from all tab links
    //     tablinks = document.getElementsByClassName("tab-links");
    //     for (i = 0; i < tablinks.length; i++) {
    //         tablinks[i].classList.remove("active-link");
    //     }
    
    //     // add the active-tab class to the selected tab content
    //     document.getElementById(tabName).classList.add("active-tab");
    
    //     // add the active-link class to the selected tab link
    //     var currentTab = document.getElementsByClassName('tab-links active-link');
    //     currentTab[0].classList.remove('active-link');
    //     document.getElementsByClassName(tabName)[0].classList.add("active-link");
    // }
    

    // responsiveness for about page

    

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});