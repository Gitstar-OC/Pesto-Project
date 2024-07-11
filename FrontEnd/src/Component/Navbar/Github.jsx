import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaGithub } from "react-icons/fa6";
import { useEffect } from "react";

const Github = () => {

  useEffect(() => {
    const seeCode = (e) => {
      const activeElement = document.activeElement;
      const isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable;

      if (!isInputFocused && (e.shiftKey && (e.key === "v" || e.key === "V"))) {
        e.preventDefault();
        window.open("https://github.com/Gitstar-OC/Pesto-Project", "_blank", "noopener,noreferrer");
      }
    };

    document.addEventListener("keydown", seeCode);
    return () => document.removeEventListener("keydown", seeCode);
  }, []);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a href="https://github.com/Gitstar-OC/Pesto-Project" target="_blank" rel="noopener noreferrer">
              <FaGithub className="NavIcon" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>See Code (Shift + V)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default Github;
