$(function() {

    var carouselWindow = $('#js-carousel');
    var carouselList = $('#js-carousel ul');
    var indicatorList = $('#js-carousel ol');
    var timeOut = 3000;
    var runCarousel = setInterval(changeNextSlide, timeOut);

    $('#js-prev').on('click', function(event) {
        changePrevSlide();
    });

    $('#js-next').on('click', function(event) {
        changeNextSlide();
    });

    $('ol li').on('click', function(event) {
        var clickedIndex = $(this).data('index');
        var currentIndex = indicatorList.find('li.active').data('index');
        var switchIndexBy = clickedIndex - currentIndex;
        var switchSlideBy = Math.abs(switchIndexBy);

        if (switchIndexBy < 0) {
            for (var i = 0; i < switchSlideBy; i++) {
                var j = 500 / switchSlideBy;
                changePrevSlide(j);
            }
        } else if (switchIndexBy > 0) {
            for (var i = 0; i < switchSlideBy; i++) {
                var j = 500 / switchSlideBy;
                changeNextSlide(j);
            }
        }
    });

    carouselWindow.on('mouseover', function() {
        clearInterval(runCarousel);
    });

    carouselWindow.on('mouseout', function() {
        runCarousel = setInterval(changeNextSlide, timeOut);
    });

    function changeNextSlide(speed = 500) {
        carouselList.animate({'marginLeft':-800}, speed, moveFirstSlide);
    }

    function changePrevSlide(speed = 500) {
        carouselList.animate({'marginLeft':0}, speed, moveLastSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:-400});
        clearActiveClass();
        setActiveSlide();
    }

    function moveLastSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-400});
        clearActiveClass();
        setActiveSlide();
    }

    function clearActiveClass() {
        var activeClass = carouselWindow.find('.active');
        activeClass.removeClass('active');
    }

    function setActiveSlide() {
        var activeSlide = carouselList.find('li:nth-of-type(2)');
        var currentIndex = activeSlide.data('slide');
        activeSlide.addClass('active');
        setActiveIndex(currentIndex);
    }

    function setActiveIndex(index) {
        var activeIndex = indicatorList.find('li').eq(index);
        activeIndex.addClass('active');
    }

    moveLastSlide();
    setActiveSlide();

});
