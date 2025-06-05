import React from 'react';
import plusIcon from './assets/plus.png';

const NewPostButton = ({ onClick }) => (
  <button id="right_container" className="modal-btn" onClick={onClick}>
    <div>
      <img src={plusIcon} alt="Plus Icon" id="plusIcon" />
    </div>
    <div>
      <p>New Post</p>
    </div>
  </button>
);

export default NewPostButton; 