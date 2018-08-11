$( '#ico-search' ).click(function() {
  $('#search-form').removeClass('search-hide');
 // $('#ico-search').addClass('ico-search-active');
});

$('body').click(function(e) {
  console.log($('.ico-wishlist'));
    if(e.target == $('.ico-wishlist')  ) {
      $('#search-form').addClass('search-hide');
    }
});




