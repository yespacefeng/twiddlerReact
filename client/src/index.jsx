import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';

import streams from '../../dataGenerator.js';
import Header from './Header.jsx';
import NewPostForm from './NewPostForm.jsx';
import TweetEntry from './TweetEntry.jsx';

function App() {
  const [tweets, setTweets] = useState(streams.home);
  const [users, setUsers] = useState(streams.users);
  const [selectedUser, setSelectedUser] = useState();

  const refresh = () => {
    if (selectedUser) {
      setTweets([...streams.users[selectedUser]]);
    } else {
      setTweets([...streams.home]);
    }
  };

  return (
    <div id='app' style={styles.app}>
      <Header />
      <NewPostForm />
      <button style={styles.button} onClick={() => refresh()} >Refresh</button>
      {tweets.reverse().map((tweet, i) => (
        <TweetEntry tweet={tweet} key={`${tweet.user}_${i}`}/>
      ))}
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    slignItems: 'center',
  },
}

ReactDom.render(<App />, document.getElementById('app'));