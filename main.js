      $(document).ready(function(){
        //Define variables and html elements used in our jquery code
        var $newTweetsButton = $('<button id="newTweets">Show new Tweets</button>');
        var $content = $("#content");
        var $menu = $("#menu")
        var index = streams.home.length - 1;
        $menu.html($newTweetsButton);
        var refreshFeed = function () {
          /*This function will refresh the entire feed. This may seem expensive, but I think it is necessary to refresh the relative time on the old tweets.
          In that perspective this function does 2 things:
          1. Show the new tweets, if there are any
          2. Refresh relative time on old tweets */
          var totalTweets = streams.home.length - 1;
          var newTweets = [];
          var tweet = "";

          for(var i = totalTweets; 0 <= i; --i ) {
              tweet = streams.home[i];
              newTweets.push("<div><a class='user' data-user=" + tweet.user + " href='' >@" +tweet.user +"</a>"+ ":" + tweet.message + "time " + tweet.created_at.fromNow() +"</div>");
          }
        
          var $feed = $(newTweets.join(''));
          $content.html('');
          $feed.appendTo($content);
        }
        //refreshFeed() is called when the document is loaded. This is to show any existing tweets when the user opens his twittler
        refreshFeed(); 

        $("#newTweets").on("click", function () {
          //On clicking the showNewTweets button, the feed will refresh itself by calling refreshFeed().
          refreshFeed();
         });

        $("a").on("click", function(e) {
          e.preventDefault();
          $content.html('');
          var $name = $(this).data("user");
          var $ht = $("<h1>timeline of "+ $name +"</h1>");
          var tweets = [];
          streams.users[$name].forEach(function(value) {
            tweets.push("<div>"+ value.message + " "+ value.created_at.fromNow() +"</div>")

          });

          $content.html($ht);
          $twit = $(tweets.join(''));
          $twit.appendTo($content);

        });

     /* streams.home.push = function ()  {
        addNewTweets();
        return Array.prototype.push.apply(this,arguments);
      }*/



      });

