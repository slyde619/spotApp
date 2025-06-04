import { useState } from "react";
import "../assets/component-styles/GalleryContainer.css";
import CardImage from "./CardImage";

export default function GalleryContainer() {
  const [galleryContent, setGalleryContent] = useState([
    {
      imageURL:
        "https://raw.githubusercontent.com/slyde619/SpotImages/b2913cea502a06a146132c92ca550eecf3d53ff9/images/val-thorens.jpg",
      caption: "Val Thorens",
      isAddedToFavourite: false,
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/slyde619/SpotImages/b2913cea502a06a146132c92ca550eecf3d53ff9/images/restaurant-terrace.jpg",
      caption: "Restaurant terrace",
      isAddedToFavourite: false,
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/slyde619/SpotImages/b2913cea502a06a146132c92ca550eecf3d53ff9/images/outdoor-cafe.jpg",
      caption: "An outdoor cafe",
      isAddedToFavourite: false,
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/slyde619/SpotImages/b2913cea502a06a146132c92ca550eecf3d53ff9/images/long-bridge.jpg",
      caption: "A very long bridge, over the forest...",
      isAddedToFavourite: false,
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/slyde619/SpotImages/b2913cea502a06a146132c92ca550eecf3d53ff9/images/tunnel-morning-light.jpg",
      caption: "Tunnel with morning light",
      isAddedToFavourite: false,
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/slyde619/SpotImages/b2913cea502a06a146132c92ca550eecf3d53ff9/images/mountain-house.jpg",
      caption: "Mountain house",
      isAddedToFavourite: false,
    },
  ]);

  return (
    <div className="gallery-container">
      {galleryContent.map((g, index) => (
        <CardImage
          key={index}
          source={g.imageURL}
          caption={g.caption}
          addedToFavourite={g.isAddedToFavourite}
        />
      ))}
    </div>
  );
}
