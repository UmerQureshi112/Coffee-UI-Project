import Navebar from "./components/Navebar";
import Coffeimage from "./components/section-1/Coffeimage";

const App = () => {
  return (
    <div className="bg-[#DED6C1] sm:h-full sm:w-screen md:h-full md:w-full lg:h-full lg:w-full">
      <Navebar></Navebar>
      <Coffeimage></Coffeimage>
    </div>
  );
}

export default App;
