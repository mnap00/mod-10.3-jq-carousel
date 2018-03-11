$(function() {

    var carouselList = $('#js-carousel ul');
    var indicatorList = $('#js-carousel ol');

    $('#js-prev').on('click', function(event) {
        changePrevSlide();
    });

    $('#js-next').on('click', function(event) {
        changeNextSlide();
    });

    $('ol li').on('click', function(event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    setInterval(changeNextSlide, 3000);

    function changeNextSlide() {
        carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);
    }

    function changePrevSlide() {
        carouselList.animate({'marginLeft':0}, 500, moveLastSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:-400});
    }

    function moveLastSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-400});
    }
});
