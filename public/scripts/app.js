/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const tweetbox = $(".tweet-container");
  console.log(tweetbox);
  tweetbox.on("mouseover", function(event) {
    $(".tweet-container").css("opacity", "1");
  });
  tweetbox.on("mouseout", function(event) {
    $(".tweet-container").css("opacity", ".75");
  });
});
