import React from 'react';
import {format} from 'timeago.js';

const TweetEntry = ({tweet}) => {
  return (
    <div>
      <h1>{tweet.user}</h1>
      <h1>{tweet.message}</h1>
      <h1>{tweet.profilePhotoURL}</h1>
      <h2>{format(tweet.created_at)}</h2>
    </div>
  )
}

export default TweetEntry;