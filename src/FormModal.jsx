import React, { useRef, useState } from 'react';

const validTypes = ["image/jpeg", "image/png", "image/jpg"];

const FormModal = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [touched, setTouched] = useState(false);
  const fileInputRef = useRef();

  if (!open) return null;

  const isValid = title.trim().length > 2 && file && validTypes.includes(file.type);

  const handleFileChange = e => {
    const f = e.target.files[0];
    setFile(f);
    if (f) {
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result);
      reader.readAsDataURL(f);
    } else {
      setImageUrl("");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!isValid) return;
    onSubmit({ title: title.trim(), file, imageUrl });
    setTitle("");
    setFile(null);
    setImageUrl("");
    setTouched(false);
    fileInputRef.current.value = "";
    onClose();
  };

  return (
    <div className="modal-overlay open-modal" onClick={e => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose} type="button" style={{ position: 'absolute', top: 12, right: 16, color: '#111', background: 'transparent', border: 'none', zIndex: 10, fontSize: '1.5rem' }} aria-label="Close">
          ×
        </button>
        <form className="modal-form" onSubmit={handleSubmit}>
          <p>Image Upload Form</p>
          <div className="form-row-1">
            <label htmlFor="image-title" className="form-label">Image Title</label>
            <input
              type="text"
              className="form-input"
              id="image-title"
              placeholder="Enter a descriptive title..."
              value={title}
              onChange={e => { setTitle(e.target.value); setTouched(true); }}
            />
          </div>
          <div className="form-row-2">
            <input
              type="file"
              className="upload"
              name="image-file"
              id="image-file"
              accept=".jpg, .jpeg, .png"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              disabled={!isValid}
              className="submit-btn"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal; 