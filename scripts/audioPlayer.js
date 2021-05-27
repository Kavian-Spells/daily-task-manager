audioPlayer();
function audioPlayer() {
    var currentSong = Math.floor(Math.random()*6);
    $('#audioPlayer')[0].src = $('#playlist li a')[currentSong];
    $('#audioPlayer')[0].play();
    $(`#${currentSong}`).addClass("current-song");

    $('#playlist li a').click(function(event) {
        event.preventDefault();
        $('#audioPlayer')[0].src = this;
        $('#audioPlayer')[0].play();
        $("#playlist li").removeClass("current-song");
        $(this).parent().addClass("current-song");
    });

    $('#audioPlayer')[0].addEventListener('ended', function(){
        currentSong++;
            if(currentSong == $('#playlist li a').length)
                currentSong = 0;
                $('#playlist li').removeClass('current-song');
                $('#playlist li:eq('+currentSong+')').addClass('current-song');
                $('#audioPlayer')[0].src = $('#playlist li a')[currentSong].href;
                $('#audioPlayer')[0].play();
    })
}