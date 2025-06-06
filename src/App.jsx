import React, { useState } from 'react'
import './App.css'
import './insta.css'
import Header from './Header'
import NewPostButton from './NewPostButton'
import CardList from './CardList'
import cardDataDefault from './cardData'
import ImageOverlay from './ImageOverlay'
import Copyright from './Copyright'
import FormModal from './FormModal'

function App() {
  const [formOpen, setFormOpen] = useState(false)
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [overlayIndex, setOverlayIndex] = useState(0)
  const [cards, setCards] = useState(cardDataDefault)

  const handleImageClick = (idx) => {
    setOverlayIndex(idx)
    setOverlayOpen(true)
  }

  const handleAddCard = ({ title, imageUrl }) => {
    setCards([
      ...cards,
      {
        img: imageUrl,
        alt: title,
        title,
      },
    ])
  }

  return (
    <div>
      <Header NewPostButton={<NewPostButton onClick={() => setFormOpen(true)} />} />
      <CardList onImageClick={handleImageClick} cards={cards} />
      <ImageOverlay
        images={cards}
        currentIndex={overlayIndex}
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        onPrev={() => setOverlayIndex(i => Math.max(0, i - 1))}
        onNext={() => setOverlayIndex(i => Math.min(cards.length - 1, i + 1))}
      />
      <FormModal open={formOpen} onClose={() => setFormOpen(false)} onSubmit={handleAddCard} />
      <Copyright />
    </div>
  )
}

export default App
