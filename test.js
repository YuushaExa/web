$('.comment a').click(function(event) {
    event.preventDefault();
   $("#message").text($(this).html());
});
