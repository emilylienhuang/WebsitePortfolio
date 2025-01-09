import React from "react";
import "./Sticker.css";

interface StickerProps {
  id: string;
  text?: string;
  backgroundColor: string;
  textColor: string;
  position: { x: number; y: number };
  onDrag: (id: string, x: number, y: number) => void;
}

const Sticker: React.FC<StickerProps> = ({
  id,
  text,
  backgroundColor,
  textColor,
  position,
  onDrag,
}) => {
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    onDrag(id, x, y);
  };

  return (
    <div
      className="sticker"
      draggable
      onDragEnd={handleDragEnd}
      style={{
        top: position.y,
        left: position.x,
        position: "absolute",
        backgroundColor,
        color: textColor,
      }}
    >
      {text}
    </div>
  );
};

export default Sticker;
