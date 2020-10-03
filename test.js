$(function() {
  var ref = new Firebase("https://comments-5628f.firebaseio.com"),
  postRef = ref.child(slugify(window.location.pathname));

const timeStamp = () => {
  let options = {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute:'2-digit'
  };
  let now = new Date().toLocaleString('en-US', options);
  return now;
};

    postRef.on("child_added", function(snapshot) {
      var newPost = snapshot.val();
      $(".comments").prepend('<div class="comment">' +
        '<h4><a href="#comments">' + escapeHtml(newPost.name) + '</a></h4>' +
        '<span class="date">' + (newPost.time) + '</span><p>' + escapeHtml(newPost.message)  + '</p></div>');
    });

    $("#comment").submit(function() {
      var a = postRef.push();

      a.set({
        name: $("#name").val(),
        message: $("#message").val(),
        frompage: location.href,
        time: timeStamp(),
      });

      $("input[type=text], textarea").val("");
      return false;
    });
});

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/[^a-zA-Z0-9-_]+/g,'');
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
