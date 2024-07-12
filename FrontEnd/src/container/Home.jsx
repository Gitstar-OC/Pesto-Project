import { Notes, Title, Navbar } from "./Exports";

const Home = () => {
  return (
    <>
      <div className="bg-[#D9D9D9] dark:bg-[#222222]">
        <Navbar /> 
        <Title />
        <Notes />
      </div>
    </>
  );
};

export default Home;
