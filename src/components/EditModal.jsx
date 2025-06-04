import Modal from "react-modal";
import "../assets/component-styles/EditModal.css";
import { MdOutlineClose } from "react-icons/md";
import { useProfile } from "../utils/profileUtils";
import { trimText } from "../utils/trimText";
import { useState } from "react";
import { useEffect } from "react";

export default function EditModal({ modalIsOpen, closeModal }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [avatar, setAvatar] = useState("");

  Modal.setAppElement("#root");

  const {updateProfile, getProfile} = useProfile();

  const closeModalButton = {display: "flex", justifyContent: "flex-end"}

  const fetchProfileInput = () => {
    const profile = getProfile();
    if(profile) {
      setTitle(profile.title);
      setDescription(profile.description);
      if(profile.image) {
        setAvatar(profile.image);
      }
    }
  }

  const updateImage = (e) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setAvatar(fileUrl);
  }

  useEffect(() => {
    fetchProfileInput();
  }, []);

  const editProfileButton = (e) => {
    e.preventDefault();
    updateProfile(title, description, avatar);
    closeModal();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit Profile Modal"
      overlayClassName={"overlay"}
    >
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
      <div style={closeModalButton}>
        <MdOutlineClose onClick={closeModal} />
      </div>
      <div>Edit Profile</div>
      <form className="edit-form">
        <img src={avatar} style={{width: "100%", height: "200px", backgroundSize: "contain"}} />
        <label htmlFor="file-input" className="file-input">
          Upload File
          <input type="file" id="file-input" accept="image/*" onChange={updateImage} style={{display: "none"}} />
        </label>
        <input placeholder="Title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
        <textarea placeholder="Description" value={description} onChange={(e) => {setDescription(e.target.value)}} />
        <button onClick={editProfileButton}>Save</button>
      </form>
    </Modal>
  );
}
