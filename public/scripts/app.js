/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // build a singular Tweet box
  function createTweetElement(data) {
    // start of the window
    let $article = $("<article>").addClass("tweet-window");
    //window header with Avatar, username and ID
    //sticks itself to the bottom of the window first
    let $header = $("<header>").addClass("userName");
    $article.append($header);
    let $userAv = $("<img>")
      .addClass("userAv")
      .attr("src", data.user.avatars.small);
    $header.append($userAv);
    let $userName = $("<span>")
      .addClass("name")
      .text(data.user.name);
    $header.append($userName);
    let $userId = $("<p>")
      .addClass("userID")
      .text(data.user.handle);
    $header.append($userId);
    // Tweet text
    let $tweetQuote = $("<span>")
      .addClass("tweetQuote")
      .text(data.content.text);
    $article.append($tweetQuote);
    // window footer with Time Posted and option icons
    let $footer = $("<footer>").addClass("footer");
    $article.append($footer);
    let $img1 = $("<img>")
      .addClass("icon")
      .attr("src", "/images/flag.png");
    $footer.append($img1);
    let $img2 = $("<img>")
      .addClass("icon")
      .attr("src", "/images/heart.png");
    $footer.append($img2);
    let $img3 = $("<img>")
      .addClass("icon")
      .attr("src", "/images/refresh.png");
    $footer.append($img3);
    let $date = $("<span>").addClass("postDate");
    $footer.append($date);

    let d = new Date(data.created_at);
    $date.text(d.toDateString(data.created_at));
    return $article;
  }

  //loops through database, builds tweetboxes for each tweet in db
  // displays the tweets on the page
  function renderTweets(tweets) {
    // loops through tweets
    for (var i = 0; i < tweets.length; i++) {
      var tweetQuote = createTweetElement(tweets[i]);
      $(".tweet-container").prepend(tweetQuote);
    }
  }

  $(".tweet-form").on("submit", event => {
    event.preventDefault();

    if ($(".new-tweet").val() === "") {
      $(".errorMessage").text("Please write a tweet!");
    } else if ($(".new-tweet").val().length > 140) {
      $(".errorMessage").text("Too many characters!");
    } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $(".tweet-form").serialize(),
        success: function(tweets) {
          $(".tweet-window").empty();
          $(".errorMessage").text("");
          $(".new-tweet").val("");
          $(".counter").text("140");
          loadTweets();
        },
        error: function() {
          console.log("Post request failed");
          alert("Post Request Failed");
        }
      });
    }
  });

  function loadTweets() {
    $.getJSON("/tweets", (data, status, xhr) => {
      renderTweets(data);
    });
  }
  loadTweets();

  $(".composeButton").click(function() {
    $(".composeForm").toggle("slow");
    $(".new-tweet").focus();
  });
});
