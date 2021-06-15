$(document).ready(() => {
    
    //sticky-nav
    let waypoint = new Waypoint({
        element: $('#restraunt-description'),
        handler: (direction) =>  {
            if (direction=="down") {
                $("nav").attr("id","sticky-nav");
            } else {
                $("nav").removeAttr("id");
            }
        }, offset: 100
    });

    //CSS Smooth Scrolling
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });

    //buttons click
    $(".button-order").click(() => {
        $("html, body").animate({scrollTop: $("#how-to-order").offset().top}, 1000);
    });

    $(".button-more").click(() => {
        $("html, body").animate({scrollTop: $("#restraunt-description").offset().top}, 1000);
    });

    //animations

    let anim1 = new Waypoint({
        element: $('#restraunt-description'),
        handler: () => {
            $(".anim1").addClass("animate__animated animate__fadeIn");
        },
        offset: 100
    });

    let anim2 = new Waypoint({
        element: $('.cities-section'),
        handler: () => {
            $(".anim2").addClass("animate__animated animate__fadeInRight");
        },
        offset: 100        
    });

    let anim3 = new Waypoint({
        element: $('#how-to-order'),
        handler: () => {
            $(".anim3").addClass("animate__animated animate__fadeInUp");
        },
        offset: 100
    });

    let buttonShake = new Waypoint({
        element: $('#header-title'),
        handler: (direction) => {
            if (direction == "up") {
                $(".button-order").addClass("animate__animated animate__swing");
            } else {
                $(".button-order").removeClass("animate__animated animate__swing");
            }
        },
        offset: 100
    });

    $(".mobile-nav-icon").click(() => {
        let icon = $(".mobile-nav-icon span");
        if(icon.hasClass("ion-md-menu")) {
            icon.removeClass("ion-md-menu");
            icon.addClass("ion-md-close");
            $("nav").animate({height: "180px"}, 500);
        } else {
            icon.addClass("ion-md-menu");
            icon.removeClass("ion-md-close");
            $("nav").animate({height: "60px"}, 500);
        }

        $("#main-nav").slideToggle(500);
    });
});

