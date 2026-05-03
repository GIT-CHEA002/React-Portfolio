function SideBarDesktop({ Jobs, setActiveJob, activeJob }) {
  return (
    <div className=" hidden lg:flex flex-col border-l-2 border-gray-600 my-3 pe-7 ">
      {Jobs.map((job, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => setActiveJob(index)}
            className={` px-8 py-4 text-left text-xl text-gray-600 font-medium border-l-2 -ml-[2px] transition-all duration-500 
                    ${activeJob === index ? "text-purple-600 bg-purple-100 border-purple-600" : "hover:border-purple-600 hover:text-purple-600 hover:bg-purple-100"}`}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}
export default SideBarDesktop;
