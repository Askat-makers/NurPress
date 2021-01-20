import React, { useState } from 'react';
import NewsDetailsPageBody from '../components/NewsDetailsPageComponents/NewsDetailsPageBody';

const NewsDetailsPage = () => {

  const [commentOwner, setCommentOwner] = useState("")
  const [commentValue, setCommentValue] = useState("")

  function handleSubmit() {
    let comment = {
      commentOwner: commentOwner,
      commentValue: commentValue,
      commentCreated: new Date()
    }
  }

  return (
    <div>
      <NewsDetailsPageBody />
    </div>
  );
};

export default NewsDetailsPage;