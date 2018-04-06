$(function() {

// Button
$('span.button').on('click', function(){
    $('span.button').removeClass('is-link');
    $(this).addClass('is-link');
});

$('span.button').on('click', function(){
    $('span.button').removeClass('is-link');
    $(this).addClass('is-link');
});

// Calc
$('input').on('input', function() {
  var ss    = $('#ss').val(),
      sd    = $('#sd').val(),
      avg   = $('#avg').val(),
      score = $('#score').val();

  switch ($('span.is-link').text()) {
  case '標準偏差':
    $('#sd').val( Math.round( (score-avg) * 100 / (ss-50) ) / 10 );
  break;
  case '偏差値':
    $('#ss').val( Math.round( ((score-avg) / sd * 10 + 50) * 10 ) / 10 );
  break;
  case '平均点':
    $('#avg').val( Math.round( 100 * score - (ss-50) * 10 * sd) / 100 );
  break;
  default:
    $('#score').val( Math.round( sd * (ss-50) + avg * 10 ) / 10 );
  break;
  }
});

// clear
$('#clear').on('click', function() {
  $('input').val("");
});

});
