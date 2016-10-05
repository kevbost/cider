console.log('\'Allo \'Allo!');

for (var i = 1; i <= 114; i++) {
  $('.grid').append(
    '<a href="#" data-featherlight="images/' + i + '.jpg" >' +
      '<div class="grid-item">' +
        '<img src="images/' + i + '.jpg" />' +
      '</div>' +
    '</a>'
  );
}

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});

$grid.imagesLoaded()
  .progress( function() {
    $grid.masonry();
  })
  .done( function() {
    $('.blocker').remove();
  })
;
