

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('bg-dark');
        }
    });
    function animateAchievements(targets) {
        anime({
            targets: targets,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: function (el, i) {
                return i * 200; 
            }
        });
    }
    animateAchievements('#achievement1, #achievement2, #achievement3');


    anime({
        targets: '.card',
        rotate: '+=360deg',
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: anime.stagger(200, { start: 500 }) 
    });
});

AOS.init({
    duration: 1200, 
});


function animateTimelineItems() {
    var timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(function (item) {
        var animationType = item.getAttribute('data-animation');

        item.style.opacity = 0;
        item.style.transform = 'translateX(-50px)';

        window.addEventListener('scroll', function () {
            var itemTop = item.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 50) {
                item.style.opacity = 1;
                item.style.transform = 'translateX(0)';
                item.classList.add(animationType);
            }
        });
    });
}

animateTimelineItems();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
