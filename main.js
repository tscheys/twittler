      $(document).ready(function(){
        //Define variables and html elements used in our jquery code
        var $newTweets = $('<button id="newTweets">Show new Tweets</button>');
        var $goBack = $('<button id="goBack">Go back to timeline</button>');
        var $sendTweet = $('<button id="sendTweet">Tweet</button>');
        var $content = $("#content");
        var $menu = $("#menu");
        var index = streams.home.length - 1;
        
        var refreshFeed = function () {
          /*This function will refresh the entire feed. This may seem expensive, but I think it is necessary to refresh the relative time on the old tweets.
          In that perspective this function does 2 things:
          1. Show the new tweets, if there are any
          2. Refresh relative time on old tweets */
          
          //declare variables
          var totalTweets = streams.home.length - 1;
          var newTweets = [];
          var tweet = "";

          //add appropiate buttons to $menu section
          $menu.html($sendTweet);
          $newTweets.appendTo($menu);

          //populates the newTweets array with tweets in desired html format
          streams.home.forEach(function (tweet) {

              newTweets.unshift("<div class='tweet'>" +
                                  "<a class='user' data-user=" + tweet.user + " href='' ><strong>@" +tweet.user +"</strong></a>" +
                                  "<div>" + tweet.message + "</div>" +
                                  "<small>" + tweet.created_at.fromNow() +"</small>" +
                              "</div>");
          });
          
          //make one long html element by joining array. Empty the content div. and finally append tweets to content section
          var $feed = $(newTweets.join(''));
          $content.html('');
          $feed.appendTo($content);
        }
        //refreshFeed() is called when the document is loaded. This is to show any existing tweets when the user opens his twittler
        refreshFeed(); 

        $("#menu").on("click", ["#newTweets", "#goBack"], function () {
        //On clicking the showNewTweets or goBack button, the feed will refresh itself by calling refreshFeed().
          refreshFeed();
         });

        $("#content").on("click", "a.user", function(e) {
          //declare variables
          var $name = $(this).data("user");
          var $title = $("<h3>Timeline of <a class='user' data-user=" + $name + " href='' ><strong>@" + $name +"</strong></a></h3>");
          var tweets = [];

          //populate tweets array with a specific user's tweets
          streams.users[$name].forEach(function(value) {
            tweets.unshift("<div class='tweet'>"+ value.message + " <div><small>"+ value.created_at.fromNow() +"</small></div></div>");
          });

          //inject goback button into menu
          //inject title and user's tweets into content section
          e.preventDefault();
          $menu.html($goBack);
          $content.html($title);
          $twit = $(tweets.join(''));
          $twit.appendTo($content);

        });

      });

