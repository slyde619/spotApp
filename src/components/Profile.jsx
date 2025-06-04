import { useState } from "react";
import "../assets/component-styles/Profile.css";
import EditModal from "./EditModal";
import Button from "./buttons/Button";
import { useProfile } from "../utils/profileUtils";
import { useEffect } from "react";
import { trimText } from "../utils/trimText";
import { IoPencil } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

export default function Profile() {

  const [title, setTitle] = useState("Aliaune Damala Bouga Time Bongo Puru Nacka Lu Lu Lu Badara Akon...");
  const [description, setDescription] = useState("Known mononymously as Akon (/'eɪkɒn/), is a Senegalese-American singer, record producer, and entrepreneur. An influential figure in modern world...");
  const [avatar, setAvatar] = useState("/Avatar.png");

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const {getProfile, updateProfile} = useProfile();

  const fetchProfile = () => {
    const profile = getProfile();
    if (profile) {
      setTitle(trimText(profile.title, 63) + "...");
      setDescription(trimText(profile.description, 144) + "...");
      if(profile.image) {
        setAvatar(profile.image);
      }
    }
  }

  useEffect(() => {
    fetchProfile();
  }, [isEditModalOpen]);

  const openEditButton = () => {
    setEditModalOpen(true);
  };

  const closeEditButton = () => {
    setEditModalOpen(false);
  };

  const newPostButton = () => {};

  return (
    <section className="main-profile">
      {/* Edit Profile Modal  */}
      <EditModal modalIsOpen={isEditModalOpen} closeModal={closeEditButton} />
      <article className="profile-card">
        <img src={avatar} alt="Avatar" className="profile-avatar" />
        <div className="card-content">
          <h1>
            {title}
          </h1>
          <p>
            {description}
          </p>
          <Button
            text={<span>
              <IoPencil />&nbsp;
              Edit Profile
            </span>}
            action={openEditButton}
            buttonType={"secondary"}
          />
        </div>
      </article>
      <Button
        text={
        <span>
          <FiPlus />&nbsp;
           New Post
           </span>}
        action={newPostButton}
        buttonType={"primary"}
        className='btn-post'
      />
    </section>
  );
}
