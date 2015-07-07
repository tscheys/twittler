      $(document).ready(function(){
        var $body = $('body');
        var $newTweetsButton = $('<button id="newTweets">Show new Tweets</button>');

        var index = streams.home.length - 1;
        var startTweets = 10;

        $body.html('');
        $newTweetsButton.appendTo($body);


        while(index >= 0){
          var $tweet = $('<div></div>');
          var tweet = streams.home[index];
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          $tweet.appendTo($body);
          index -= 1;
        }

        $("#newTweets").on("click", function () {

          var totalTweets = streams.home.length - 1;

          var newTweets = [];

          for(var i = totalTweets; startTweets < i; --i ) {
              var tweet = streams.home[i];
              newTweets.push("<div><a href='timeline.html' target='_blank'>@" +tweet.user +"</a>"+ ":" + tweet.message + "time " + tweet.created_at.toDateString() +"</div>");

          }
          startTweets = totalTweets;
        
          var $newtwe = $(newTweets.join(''));
          $newtwe.prependTo($body);
         });

      });