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
        text: "If I have seen further it is by standing on the shoulders of giants"
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

  function createTweetElement(data) {
    let $article = $("<article>").addClass("tweet-window");
    let $header = $("<header>").addClass("userName");
    $article.append($header);
    let $userAv = $("<img>").addClass("userAv");
    $header.append($userAv);
    let $userName = $("<span>").addClass("name");
    $header.append($userName);
    let $userId = $("<p>").addClass("userID");
    $header.append($userId);
    let $tweetQuote = $("<span>").addClass("tweetQuote");
    $article.append($tweetQuote);
    let $footer = $("<footer>").addClass("footer");
    $article.append($footer);
    let $img1 = $("<img>").addClass("icon");
    $footer.append($img1);
    let $img2 = $("<img>").addClass("icon");
    $footer.append($img2);
    let $img3 = $("<img>").addClass("icon");
    $footer.append($img3);
    let $date = $("<span>").addClass("postDate");
    $footer.append($date);

    $userName.text(data.user.name);
    $userAv.attr("src", data.user.avatars.small);
    $userId.text(data.user.handle);
    $tweetQuote.text(data.content.text);
    $img1.attr("src", "/images/flag.png");
    $img2.attr("src", "/images/heart.png");
    $img3.attr("src", "/images/refresh.png");
    let d = new Date(data.created_at);
    $date.text(d.toDateString(data.created_at));
    return $article;
  }

  function renderTweets(tweets) {
    // loops through tweets
    for (var i = 0; i < tweets.length; i++) {
      var tweetQuote = createTweetElement(data[i]);
      $(".tweet-container").prepend(tweetQuote);
    }
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }

  // <section class="tweet-container">
  //       <article class="tweet-window">
  //         <header class="userName">
  //           <img class="userAv" src="/images/avatar-placeholder.png" />
  //           <span class="name">Bill Fields</span>
  //           <p class="userID">@MrFields</p>
  //         </header>
  //         <span class="tweetSpot">This is where my tweet goes!</span>
  //         <footer class="postDate">
  //           post x minutes ago
  //           <span class="iconGroup">
  //             <img class="icon" src="/images/flag.png"/>
  //             <img class="icon" src="/images/refresh.png"/>
  //             <img class="icon" src="/images/heart.png"
  //           /></span>

  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $("#tweets-container").append($tweet);
  // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  renderTweets(data);
});
