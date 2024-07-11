import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaLinkedin } from "react-icons/fa6";
import { useEffect } from "react";

const LinkedIn = () => {

  useEffect(() => {
    const seeLinkedIn = (e) => {
      const activeElement = document.activeElement;
      const isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable;

      if (!isInputFocused && (e.shiftKey && (e.key === "c" || e.key === "C"))) {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/om-chandankar/", "_blank", "noopener,noreferrer");
      }
    };

    document.addEventListener("keydown", seeLinkedIn);
    return () => document.removeEventListener("keydown", seeLinkedIn);
  }, []);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a href="https://www.linkedin.com/in/om-chandankar/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="NavIcon" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact (Shift + C)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default LinkedIn;
