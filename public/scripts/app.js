$(document).ready(function() {
  // build a singular Tweet box
  function createTweetElement(data) {
    // initializes a new Tweet window
    // attaches an <article> tag to the top of the window
    let $article = $("<article>").addClass("tweet-window");

    // Builds a header, attached to article
    let $header = $("<header>").addClass("userName");
    $article.append($header);
    // user avatar, attached to Header
    let $userAv = $("<img>")
      .addClass("userAv")
      .attr("src", data.user.avatars.small);
    // user's Real Name, attached to Header
    $header.append($userAv);
    let $userName = $("<span>")
      .addClass("name")
      .text(data.user.name);
    $header.append($userName);
    // user's ID/handle, attached to Header
    let $userId = $("<p>")
      .addClass("userID")
      .text(data.user.handle);
    $header.append($userId);

    // Tweet text
    // attaches to the Article, under the Header
    let $tweetQuote = $("<span>")
      .addClass("tweetQuote")
      .text(data.content.text);
    $article.append($tweetQuote);

    // window footer with Time Posted and option pictures
    // attaches to the Article, under the Tweet Text
    let $footer = $("<footer>").addClass("footer");
    $article.append($footer);
    // option pictures
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
    // date the tweet was posted
    let d = new Date(data.created_at);
    $date.text(d.toDateString(data.created_at));
    return $article;
  }

  // loops through database, builds tweetboxes for each tweet in db
  // displays the tweets on the page
  function renderTweets(tweets) {
    // loops through tweets
    for (var i = 0; i < tweets.length; i++) {
      var tweetQuote = createTweetElement(tweets[i]);
      $(".tweet-container").prepend(tweetQuote);
    }
  }

  // prevents Submit button from refreshing the page
  $(".tweet-form").on("submit", event => {
    event.preventDefault();

    // possible error gatekeeping
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
          // upon success, removes the list of tweets on the page
          $(".tweet-window").empty();
          // upon success, if error message exists, removes it
          $(".errorMessage").text("");
          // upon success, textarea in New Tweet box resets to Empty
          $(".new-tweet").val("");
          // upon success, character count resets to 140
          $(".counter").text("140");
          // puts all the tweets back on the page, including the new one
          loadTweets();
        },
        error: function() {
          console.log("Post request failed");
          alert("Post Request Failed");
        }
      });
    }
  });

  // gets the tweets from the database and renders them to the page
  function loadTweets() {
    $.getJSON("/tweets", (data, status, xhr) => {
      renderTweets(data);
    });
  }
  // loads the tweets upon intial load of webpage
  loadTweets();

  // Compose Tweet button toggles the form when clicked, and sends focus to textarea if form is on
  $(".composeButton").click(function() {
    $(".composeForm").toggle("slow");
    $(".new-tweet").focus();
  });
});
