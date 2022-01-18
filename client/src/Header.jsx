import React from 'react';

const Header = () => {
  return (
    <div id='header' style={styles.header}>
      <h1>Twiddler</h1>
    </div>
  )
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
}

export default Header;