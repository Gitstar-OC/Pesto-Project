import { LinkedIn, Theme, Github, Avatar, Shortcut } from "../Component/Navbar/NavbarExports";

const Navbar = () => {
  return (
    <div className="flex justify-end pt-6 mr-16 mb-6">
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
 