import React, { useEffect, useState } from 'react';
import { LinkedIn, Theme, Github, Avatar, Shortcut } from "../Component/Navbar/NavbarExports";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    handleResize(); // Set initial state based on current window width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`flex justify-end pt-6 mr-16 mb-6 ${isFixed ? 'fixed top-0 right-0 z-50' : ''}`}>
      <span className="border-2 rounded-[25px] dark:border-white border-black bg-white dark:bg-black flex space-x-2 p-1">
        <Shortcut />
        <LinkedIn />
        <Theme />
        <Github />
        <Avatar />
      </span>
    </div>
  );
};

export default Navbar;
