import { useState, useEffect } from "react";

export default function Typewriter({ texts, speed = 150, pause = 2000 }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setTextIndex((textIndex + 1) % texts.length);
        }, pause);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, textIndex, texts, speed, pause]);

  return <div>{currentText}</div>;
}
