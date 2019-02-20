/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Test / driver code (temporary). Eventually will get this from the server.
  const data = [
    {
      user: {
        name: "Newton",
        avatars: {
          small: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          regular: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          large: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        handle: "@SirIsaac"
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants really really really really reallu really long"
      },
      created_at: 1461116232227
    },
    {
      user: {
        name: "Descartes",
        avatars: {
          small: "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          regular: "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          large: "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        handle: "@rd"
      },
      content: {
        text: "Je pense , donc je suis"
      },
      created_at: 1461113959088
    },
    {
      user: {
        name: "Johann von Goethe",
        avatars: {
          small: "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          regular: "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          large: "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        handle: "@johann49"
      },
      content: {
        text: "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      created_at: 1461113796368
    }
  ];

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
      var tweetQuote = createTweetElement(data[i]);
      $(".tweet-container").prepend(tweetQuote);
    }
  }
  renderTweets(data);

  $(".tweet-form").on("submit", event => {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(".tweet-form").serialize(),
      success: function(tweets) {},
      error: function() {
        console.log("Post request failed");
        alert("Post Request Failed");
      }
    });
  });
});
