$(document).ready(function() {
  const maxChar = 140;
  const newPost = $(".new-tweet");

  newPost.on("input", function(event) {
    let $textarea = $(this);
    let form = $textarea.parent();
    let counter = form.find(".counter");
    counter.text(maxChar - this.value.length);

    if (this.value.length > maxChar) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  });
});
