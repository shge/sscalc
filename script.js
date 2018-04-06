$(function() {

$('#nav').load('nav.html?201804062022')

// Button
$('span.button').on('click', function(){
  $('span.button').removeClass('is-link');
  $(this).addClass('is-link');

  switch ($(this).text()) {
    case '標準偏差':
      $('input').prop("disabled", false);
      $('#sd').prop("disabled", true);
    break;
    case '偏差値':
      $('input').prop("disabled", false);
      $('#ss').prop("disabled", true);
    break;
    case '平均点':
      $('input').prop("disabled", false);
      $('#avg').prop("disabled", true);
    break;
    default:
      $('input').prop("disabled", false);
      $('#score').prop("disabled", true);
    break;
  }
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
  if ($('#sd').prop('disabled') && score!=="" && avg!=="" && ss!=="" ) {
    if (score === avg) {
      $('.message').addClass('hidden');
      $('#err-same').removeClass('hidden');
    } else if (score < avg && ss > 50) {
      $('.message').addClass('hidden');
      $('#err-large').removeClass('hidden');
    } else if (score > avg && ss < 50) {
      $('.message').addClass('hidden');
      $('#err-small').removeClass('hidden');
    } else {
      $('.message').addClass('hidden');
      $('#msg-default').removeClass('hidden');
    }
  } else {
    $('.message').addClass('hidden');
    $('#msg-default').removeClass('hidden');
  }
});

// clear
$('#clear').on('click', function() {
  $('input').val("");
});

});
