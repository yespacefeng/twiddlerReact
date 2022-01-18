import React from 'react';

const NewPostForm = () => {
  return (
    <form id='new-post-form' style={styles.form}>
      <label for='username'>Username</label>
      <input type='text' id='username' name='username'></input>
      <label for='Tweet'>Tweet</label>
      <textarea for='text' id='tweet' name='tweet'></textarea>
      <button>Post</button>
    </form>
  )
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export default NewPostForm;