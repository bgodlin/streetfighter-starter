$(document).ready(function () {
    $('.ryu').mouseenter(function () {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
        .mouseleave(function () {
            $('.ryu-still').show();
            $('.ryu-ready').hide();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate(
                { 'left': '1020px' },
                500,
                function () {
                    $('.hadouken').hide();
                    $('.hadouken').css('left', '520px');
                });
        })
        .mouseup(function () {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });

    $("body").keydown(function (event) {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '88') {
            $('.ryu-still').hide();
            $('.ryu-cool').show();
            console.log('X pressed')
        }
        else {
            console.log('Other button is pressed')
        }

    })
        .keyup(function () {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        });

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}