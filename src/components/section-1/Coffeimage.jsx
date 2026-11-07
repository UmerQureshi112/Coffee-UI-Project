import Description from "./Description";


const Coffeimage = () => {
  return (
    <div className="p-5 sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row lg:items-center lg:justify-between">
      <img className="rounded-2xl sm:h-[123vw] md:h-[123vw] lg:h-[30vw]"src="https://media.istockphoto.com/id/174684628/photo/pouring-fresh-coffee.jpg?s=612x612&w=0&k=20&c=pXOkO9bhWVKA7s4JGtvz9aPMZzkF24noXPdXlMkTQ_A=" alt="Do not found" />
      <div>
        <Description></Description>
      </div>
    </div>
  );
}

export default Coffeimage;
