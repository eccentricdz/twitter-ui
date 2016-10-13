require(['json!tweets.json'], function(tweet_results){
    $(function(){
        var $articlesContainer = $('#articles-container');
        var $sampleCard = $('#sample-card');

        function addAllCardsFromArray(tweetArray) {
            tweetArray.forEach(function(element) {
                createAndAppendTweetCard(element);
            });
        }

        function createAndAppendTweetCard(tweet) {
            var $newCard = $sampleCard.clone();
            var userHandleSpan = '<span class="user-handle">'+tweet.user_handle+'</span>';
            //set the user name and handle
            $newCard.find('.user-name').html(tweet.user_name+userHandleSpan);
            //set the tweet time
            $newCard.find('.tweet-time').text(tweet.tweet_since);
            //set the tweet text
            $newCard.find('.tweet-text').text(tweet.text);
            //set the user profile pic
            $newCard.find('.user-dp').css('background-image', 'url("'+tweet.profile_pic_url+'")');
            //set the retweet count
            if (tweet.retweet_count > 0) {
                $newCard.find('.retweet-count').text(tweet.retweet_count);
            }
            //set the retweeted icon
            if (tweet.retweeted == "false") {
                $newCard.find('.retweeted-icon').hide();
            }

            //append the card to the articles container and change the sample card id
            $newCard.appendTo($articlesContainer).attr('id', 'tweet-card-'+tweet.tweet_id);
        }

        addAllCardsFromArray(tweet_results);

    });
});
