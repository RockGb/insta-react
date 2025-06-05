import React, { useState } from 'react';

const Card = ({ img, alt, title, onImageClick }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(l => !l);
  };

  return (
    <div className="card-component">
      <img src={img} alt={alt} onClick={onImageClick} style={{ cursor: 'pointer' }} />
      <div className="card-data" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem' }}>
        <p style={{ textAlign: 'left', margin: 0 }}>{title}</p>
        <button
          className={`like-button${liked ? ' liked' : ''}`}
          aria-label="Like Button"
          onClick={handleLike}
          type="button"
          style={{ border: 'none', background: 'none', outline: 'none', boxShadow: 'none', padding: 0, marginLeft: 'auto', cursor: 'pointer' }}
          tabIndex={0}
        >
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
            <g id="Like Icon">
              <path
                id="Union"
                d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
                className="heart-icon"
                strokeWidth="2"
                fill={liked ? 'red' : 'none'}
                stroke={liked ? 'red' : 'black'}
              />
            </g>
          </svg>
          <span className="sr-only">Like Button</span>
        </button>
      </div>
    </div>
  );
};

export default Card; 