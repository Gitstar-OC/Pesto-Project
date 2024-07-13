import { Notes, Title, Navbar } from "./Exports";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home - Todo</title>
    </Helmet>
      <div className="bg-[#D9D9D9] dark:bg-[#222222]">
        <Navbar /> 
        <Title />
        <Notes />
      </div>
    </>
  );
};

export default Home;
