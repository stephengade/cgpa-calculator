import React from 'react';

const ShareTweet = () => {
    const tweetContent = "Everyone should try out this amazing GPA and CGPA calculator (https://my-cgpa.vercel.app) by @stephen_olgade!  #cgpa Thank you for creating it!";


  const tweetNow = () => {
    const twitterShareURL = 'https://twitter.com/intent/tweet';
    const url = `${twitterShareURL}?text=${encodeURIComponent(tweetContent)}`;

    // Open the constructed URL in a new tab/window
    window.open(url, '_blank');
  };

  return (
    <div>
      <button onClick={tweetNow}>Tweet this tool</button>
    </div>
  );
};

export default ShareTweet;














