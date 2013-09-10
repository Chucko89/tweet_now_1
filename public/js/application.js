$(document).ready(function() {
  $('#tweet').on('submit', function(e){
    console.log('you submited');
    var form_data = $(this).serialize()
    e.preventDefault();
    $('#tweet').hide();
    $("#tweetContainer").append("<p id='posting'><img src='/ajax-loader.gif' />  Your tweet is being processed </p>")
    $.ajax({
      url: this.action,
      type: this.method,
      data: form_data
    })
    .done(function() {
      console.log("success");
      $("#posting").remove();
      $('#tweetContainer').append('<h2>Your tweet was successful!</h2>');
    })
    .fail(function() {
      console.log("error");
      $("#posting").remove();
      $('#tweetContainer').append('<h2>Uh oh! Something went wrong!</h2>');
    })
  });
});
