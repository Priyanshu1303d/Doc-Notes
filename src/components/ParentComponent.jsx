// ParentComponent.js
import React, { useState } from 'react';
import Background from './Background';
import Foreground from './Foreground';
import Card from './Card';

function ParentComponent() {

  const [cards, setCards] = useState([]);

  
  const addCard = () => {
    const id = Date.now(); 
    const newCard = { id, data: cardData }; 
    setCards([...cards, newCard]);
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
     
      {cards.map(card => (
        <div key={card.id} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Card data={card.data} onDelete={() => deleteCard(card.id)} />
        </div>
      ))}
     
    </div>
  );
}

export default ParentComponent;
