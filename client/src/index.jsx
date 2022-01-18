import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';

import streams from '../../dataGenerator.js';
import TweetEntry from './TweetEntry.jsx';

function App() {
  const [tweets, setTweets] = useState(streams.home);
  const [users, setUsers] = useState(streams.users);

  const refresh = () => {
    setTweets([...streams.home]);
  };

  return (
    <div>
      <h1>Twiddler</h1>
      <button onClick={() => refresh()}>update</button>
      {tweets.reverse().map(tweet => (
        <TweetEntry tweet={tweet} />
      ))}
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));