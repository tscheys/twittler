      $(document).ready(function(){
        var $newTweetsButton = $('<button id="newTweets">Show new Tweets</button>');
        var $section = $("#tweets");
        var index = streams.home.length - 1;
        var startTweets = 10;

        $newTweetsButton.appendTo($section);


        /*while(index >= 0){
          var $tweet = $('<div></div>');
          var tweet = streams.home[index];
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          $tweet.appendTo($section);
          index -= 1;
        }*/

        function addNewTweets() {
           var totalTweets = streams.home.length - 1;

          var newTweets = [];

          for(var i = totalTweets; startTweets < i; --i ) {
              var tweet = streams.home[i];
              newTweets.push("<div><a href='' >@" +tweet.user +"</a>"+ ":" + tweet.message + "time " + tweet.created_at.toDateString() +"</div>");

          }
          startTweets = totalTweets;
        
          var $newtwe = $(newTweets.join(''));
          $newtwe.prependTo($section);
        }

        /*$("#newTweets").on("click", function () {

          var totalTweets = streams.home.length - 1;

          var newTweets = [];

          for(var i = totalTweets; startTweets < i; --i ) {
              var tweet = streams.home[i];
              newTweets.push("<div><a href='' >@" +tweet.user +"</a>"+ ":" + tweet.message + "time " + tweet.created_at.toDateString() +"</div>");

          }
          startTweets = totalTweets;
        
          var $newtwe = $(newTweets.join(''));
          $newtwe.prependTo($section);
         });

              $("a").on("click", function() {

        var name = $(this).attr("data");
        var $ht = $("<h1>timeline of" + name + "</h1>");
        $ht.appendTo($timeline);
      });*/

      streams.home.push = function ()  {
        addNewTweets();
        return Array.prototype.push.apply(this,arguments);
      }



      });

