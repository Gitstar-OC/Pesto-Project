import { useState } from "react";

const Title = () => {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsEditing(false);
    }
  };

  const handleSpanClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex justify-start mt-6 mb-6 ml-[5vw]">
      <span className="border-2 rounded-[25px] dark:border-white border-black flex min-w-[40vw] p-2 bg-white dark:bg-black ">
        <div className="font-ml text-[40px] flex items-center justify-center w-full">
          {isEditing ? (
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-center  w-full"
              style={{ fontSize: '40px' }}
            />
          ) : (
            <span onClick={handleSpanClick} className="cursor-pointer w-full text-center">
              {name}'s {" "} Notes
            </span>
          )}
        </div>
      </span>
    </div>
  );
};

export default Title;


