/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
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
  };

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
    $date.text(d.toDateString());
    return $article;
  }

  var $tweet = createTweetElement(tweetData);
  console.log($tweet); // to see what it looks like
  $(".tweet-container").prepend($tweet);

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
});
