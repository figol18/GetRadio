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
    let rangeVolume = document.querySelector('#volume');
    if (correntVolume > 0) {
        $('#player').prop('volume', 0);
        $(this).removeClass('ico-muted-on');
        $(this).addClass('ico-muted-of');
        rangeVolume.value = 0;
    } else {
        $('#player').prop('volume', 1);
        $(this).removeClass('ico-muted-of');
        $(this).addClass('ico-muted-on');
        rangeVolume.value = 1;
    }
});

// Audio - volume
function changeVolume() {
    let rangeValue = document.querySelector('#volume').value;
    let player = document.querySelector('#player');
    player.volume = rangeValue;
    if (player.volume === 0) {
        $('#muted').removeClass('ico-muted-on');
        $('#muted').addClass('ico-muted-of');
    } else if(player.volume != 0 && $('#muted').hasClass('ico-muted-of') ) {
        $('#muted').removeClass('ico-muted-of');
        $('#muted').addClass('ico-muted-on');
    }
}

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
