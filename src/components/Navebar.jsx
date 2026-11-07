import Coffe from "./projectname/Coffe";
import About from "./settings/About";
import Help from "./settings/Help";
import Home from "./settings/Home";
import Setting from "./settings/Setting";

const Navebar = () => {
  return (
    <div className="pb-3.5 pt-3.5 bg-[#e7e6e3] h-[7vw] w-screen flex items-center justify-between lg:h-[6vw]">
      <Coffe></Coffe>
      <div className="flex gap-4 pr-10">
      <Home></Home>
      <About></About>
      <Setting></Setting>
      <Help></Help>
      </div>
    </div>
  );
}

export default Navebar;





