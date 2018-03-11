$(function() {

    var carouselList = $("#js-carousel ul");
    var indicatorList = $("#js-carousel ol");

    setInterval(changeSlide, 3000);

    function changeSlide() {
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
});
