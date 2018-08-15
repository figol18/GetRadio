//Search - show/hide
$( '#ico-search' ).click(function() {
    $('#search-form').addClass('search');
    $('#search-form').removeClass('search-hide');
});
$(document).mousedown(function (e) {
    let container = $("#search-form");
    if (!container.is(e.target) && container.has(e.target).length === 0){
        $('#search-form').addClass('search-hide');
        $('#search-form').removeClass('search');
    }
});

//Search - reset
if ($('input[name="search"]')[0].value == '') {
    $('#reset-search-form').hide();
} 
$('input[name="search"]').keydown(function() {
    $('#reset-search-form').show();
});
$('#reset-search-form').mousedown(function () {
    $('input[name="search"]')[0].value = '';
    $('#reset-search-form').hide();
});

//Audio player - start/pause
$('#start').mousedown( function() {
    document.querySelector('#player').play();
    $(this).hide();
    $('#pause').show();
});
$('#pause').mousedown( function() {
    document.querySelector('#player').pause();
    $(this).hide();
    $('#start').show();
});

//Audio player - muted on/of
$('#muted').mousedown( function () {
    let correntVolume = $('#player').prop('volume');
    if (correntVolume === 1) {
        $('#player').prop('volume', 0);
        $(this).removeClass('ico-muted-on');
        $(this).addClass('ico-muted-of');
    } else {
        $('#player').prop('volume', 1);
        $(this).removeClass('ico-muted-of');
        $(this).addClass('ico-muted-on');
    }
});

//Audio player - timer audio
function myTimer () {
    let separator = ':';
    let countSecMin = 60;
    let z = function (x) {
        return (((x < 10) ? '0' : '') + x);
    };
    let timer = document.querySelector('#time');
    let timesInSec = timer.innerHTML.split (separator);
    let t = parseInt (timesInSec[0]) * countSecMin * countSecMin + parseInt (timesInSec[1]) * countSecMin + parseInt (timesInSec[2]) + 1;
    timer.innerHTML = [z (Math.floor (t / countSecMin / countSecMin)),
                       z (Math.floor (t % (countSecMin * countSecMin) / countSecMin)), 
                       z (t % (countSecMin * countSecMin) % countSecMin)].join(separator);
    timer.wrk = setTimeout (myTimer, 1000);
}
$('#start').mousedown(function () {
    let timer = document.querySelector('#time');
    if (!timer.wrk) {
        timer.innerHTML = '00:00:00';
        timer.wrk = setTimeout (myTimer, 1000);
    }
});
$('#pause').mousedown(function() {
    let timer = document.querySelector('#time');
    if (timer.wrk) {
        clearTimeout (timer.wrk); 
        timer.wrk = 0;
    }
});

//wishlist add/remove
$('#wishlist').mousedown( function(){
    if($(this).hasClass('ico-wishlist-active')) {
        $(this).removeClass('ico-wishlist-active');
        $(this).addClass('ico-wishlist');
    } else {
        $(this).removeClass('ico-wishlist');
        $(this).addClass('ico-wishlist-active');
    }
});
