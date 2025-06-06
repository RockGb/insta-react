import React, { useState, useRef } from 'react';
import logoImg from './assets/Logo.svg';
import avatarDefault from './assets/Avatar.svg';
import './App.css';
import './insta.css';

const Header = ({ NewPostButton }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [personName, setPersonName] = useState('Bessie Coleman');
  const [profession, setProfession] = useState('Civil Aviator');
  const [avatar, setAvatar] = useState(avatarDefault);
  const [editName, setEditName] = useState('');
  const [editBio, setEditBio] = useState('');
  const [editImg, setEditImg] = useState(null);
  const fileInputRef = useRef();

  const openEditModal = () => {
    setEditName(personName);
    setEditBio(profession);
    setShowEditModal(true);
  };

  const closeEditModal = () => setShowEditModal(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editName || !editBio || !editImg) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    if (editName.length < 3 || editName.length > 30) {
      alert('Name must be between 3 and 30 characters.');
      return;
    }
    if (editBio.length < 10 || editBio.length > 100) {
      alert('Biography must be between 10 and 100 characters.');
      return;
    }
    setPersonName(editName);
    setProfession(editBio);
    setAvatar(URL.createObjectURL(editImg));
    setShowEditModal(false);
  };

  return (
    <>
      {/* Main header area with centered logo and SPOTS */}
      <header className="header-main">
        <div className="logo-bar">
          <img src={logoImg} id="logoImg" alt="logo" />
        </div>
        <div className="header-flex">
          {/* Left: Avatar and info */}
          <div className="header-avatar-info">
            <img src={avatar} id="avatarImg" alt="Avatar" className="header-avatar-img" />
            <div id="textContainer" className="header-text-container">
              <p className="header-person-name">{personName}</p>
              <p className="header-profession">{profession}</p>
              <button id="editProfile" className="header-edit-profile" onClick={openEditModal}>
                <span dangerouslySetInnerHTML={{__html: `<svg width=\"16\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"13.0676\" y=\"4.87506\" width=\"11.6506\" height=\"3.21396\" transform=\"rotate(135 13.0676 4.87506)\" fill=\"#212121\"/><path d=\"M14.2035 1.4662C14.8311 2.09377 14.8311 3.11125 14.2035 3.73881L13.6354 4.30697L11.3628 2.03436L11.9309 1.4662C12.5585 0.83864 13.576 0.83864 14.2035 1.4662Z\" fill=\"#212121\"/><path d=\"M1.54021 13.4837L2.55674 10.8408L4.82935 13.1134L2.18637 14.1299C1.782 14.2854 1.38468 13.8881 1.54021 13.4837Z\" fill=\"#212121\"/></svg>`}} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
          {/* Right: New Post button */}
          <div className="header-new-post">{NewPostButton}</div>
        </div>
      </header>
      {/* Edit Modal */}
      {showEditModal && (
        <div className="editModal" id="dynamicModal" style={{ display: 'flex' }}>
          <div className="editModal-content">
            <span className="close" onClick={closeEditModal}>&times;</span>
            <form onSubmit={handleEditSubmit}>
              <h3>Edit Info</h3>
              <label>Full Name:</label><br />
              <input
                type="text"
                id="editName"
                placeholder="John Doe"
                value={editName}
                onChange={e => setEditName(e.target.value)}
              /><br />
              <label>Bio:</label><br />
              <textarea
                id="bio"
                name="biography"
                rows={5}
                cols={32}
                placeholder="Biography"
                value={editBio}
                onChange={e => setEditBio(e.target.value)}
              /><br />
              <label>Profile Image</label><br />
              <input
                type="file"
                id="profileImg"
                accept="image/*"
                ref={fileInputRef}
                onChange={e => setEditImg(e.target.files[0])}
              />
              <button type="submit" id="popSave">Save</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 