import { useState } from "react";
import "../../assets/component-styles/Button.css";
import { useEffect } from "react";

export default function Button({ text, action, buttonType }) {
  const [buttonStyle, setButtonStyle] = useState(null);

  const setButtons = () => {
    if (buttonType == "primary") {
      setButtonStyle({
        backgroundColor: "#212121",
        color: "#FCF5E5",
        borderRadius: "8px",
      });
    } else if (buttonType == "secondary") {
      setButtonStyle({ color: "#212121", borderRadius: "8px" , backgroundColor: 'transparent', border: 'none'});
    }
  };

  useEffect(() => {
    setButtons();
  }, []);

  return (
    <button onClick={action} style={buttonStyle} className="button">
      {text}
    </button>
  );
}
