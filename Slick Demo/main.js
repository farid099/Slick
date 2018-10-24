$(function () {

    $('.card').flip();
    $(".card").on("flip:done", function () {
        $(this).next().flip("toggle");

    })
})