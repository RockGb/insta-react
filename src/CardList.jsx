import React from 'react';
import Card from './Card';

const CardList = ({ cards, onImageClick }) => (
  <section id="bodyPart">
    {cards.map((item, idx) => (
      <Card
        key={idx}
        img={item.img}
        alt={item.alt}
        title={item.title}
        onImageClick={e => onImageClick(idx, e)}
      />
    ))}
  </section>
);

export default CardList; 