import React, { useState } from "react";
import Sticker from "../components/Sticker"; // Individual sticker component
import "./StickerWall.css";

interface StickerData {
  id: string;
  text?: string;
  backgroundColor: string;
  textColor: string;
  position: { x: number; y: number };
}

const StickerWall: React.FC = () => {
  const [stickers, setStickers] = useState<StickerData[]>([]);
  const [newStickerText, setNewStickerText] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFD700"); // Default: Gold
  const [textColor, setTextColor] = useState<string>("#000000"); // Default: Black

  const addSticker = () => {
    if (!newStickerText.trim()) {
      alert("Please enter some text for your sticker!");
      return;
    }

    const newSticker: StickerData = {
      id: Date.now().toString(),
      text: newStickerText,
      backgroundColor,
      textColor,
      position: { x: 50, y: 50 }, // Default position
    };

    setStickers([...stickers, newSticker]);
    setNewStickerText(""); // Clear input
    setBackgroundColor("#FFD700"); // Reset to default
    setTextColor("#000000"); // Reset to default
  };

  const updateStickerPosition = (id: string, x: number, y: number) => {
    setStickers((prev) =>
      prev.map((sticker) =>
        sticker.id === id ? { ...sticker, position: { x, y } } : sticker
      )
    );
  };

  return (
    <div className="sticker-wall-page">
      <div className="sticker-creator">
        <h2>Create Your Sticker</h2>
        <input
          type="text"
          value={newStickerText}
          onChange={(e) => setNewStickerText(e.target.value)}
          placeholder="Enter your sticker text"
        />
        <label>
          Background Color:
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>
        <label>
          Text Color:
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
        <button onClick={addSticker}>Add Sticker</button>
      </div>
      <div className="sticker-wall">
        {stickers.map((sticker) => (
          <Sticker
            key={sticker.id}
            id={sticker.id}
            text={sticker.text}
            backgroundColor={sticker.backgroundColor}
            textColor={sticker.textColor}
            position={sticker.position}
            onDrag={updateStickerPosition}
          />
        ))}
      </div>
    </div>
  );
};

export default StickerWall;
