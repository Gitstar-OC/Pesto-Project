import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AvatarImages } from "../Constant";

const Avatar = () => {
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  useEffect(() => {
    const changeAvatar = (e) => {
      const activeElement = document.activeElement;
      const isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable;

      if (!isInputFocused && (e.ctrlKey && (e.key === "a" || e.key === "A"))) {
        e.preventDefault();
        handleAvatarClick();
      }
    };

    document.addEventListener("keydown", changeAvatar);
    return () => document.removeEventListener("keydown", changeAvatar);
  }, []);

  const handleAvatarClick = () => {
    setCurrentAvatarIndex((prevIndex) => (prevIndex + 1) % AvatarImages.length);
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="NavIcon"  onClick={handleAvatarClick}>
              <img 
                src={AvatarImages[currentAvatarIndex].image} 
                alt={AvatarImages[currentAvatarIndex].name}
                className="avatar-image"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Change Avatar (Ctrl + A)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default Avatar;
