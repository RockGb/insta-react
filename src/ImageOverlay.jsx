import React from 'react';

const ImageOverlay = ({ images, currentIndex, open, onClose, onPrev, onNext }) => {
  if (!open || !images.length) return null;
  const current = images[currentIndex];
  return (
    <div className={`image-modal-overlay${open ? ' active' : ''}`} onClick={e => e.target.classList.contains('image-modal-overlay') && onClose()}>
      <div className="image-overlay-container">
        <button className="close-btn" aria-label="Close overlay" onClick={onClose}>&times;</button>
        <button className="nav-btn prev-btn" aria-label="Previous image" onClick={onPrev} disabled={currentIndex === 0}>&#8249;</button>
        <div className="image-wrapper">
          <img className="overlay-image" src={current.img} alt={current.alt || 'Image'} />
        </div>
        <button className="nav-btn next-btn" aria-label="Next image" onClick={onNext} disabled={currentIndex === images.length - 1}>&#8250;</button>
        <div className="image-counter">
          <span className="current-index">{currentIndex + 1}</span> / <span className="total-images">{images.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay; 