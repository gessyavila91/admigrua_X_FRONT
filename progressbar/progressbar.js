$(window).load(function() {
    var percentage = 0;
    var load = setInterval(function() {
        $('.progres-bar').css('width', percentage + "%");
        percentage++;
        if (percentage == 101) {
            clearInterval(load);
        }
        $('.set').val(percentage);

        var date = new Date();
        var currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        $('.progress-wrapper b').text(currentTime);








        if (percentage < 25) {
            $('.progres-bar,body').css("background", "#47CF73");
        } else if (percentage < 50) {
            $('.progres-bar,body').css("background", "#FFD200");
        } else if (percentage < 75) {
            $('.progres-bar,body').css("background", "#f68002");
        } else {
            $('.progres-bar,body').css("background", "#f62f02");
        }
    }, 600);

});