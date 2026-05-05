function FeedBackSection({ projectDisplay }) {
  return (
    <div className=" flex flex-col   p-6 lg:p-12 lg:mx-32  border-2 border-purple-600 rounded-xl shadow shadow-purple-600">
      <h1 className="text-gray-600 lg:text-2xl order-2 lg:order-1">
        {projectDisplay.feedback}
      </h1>
      <div className="flex py-3 items-center space-x-3 order-1 lg:order-2 my-2 ">
        <div className="rounded-full w-[60px] h-[60px] overflow-hidden ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7m7zZPRym_TtWktKAyG37qsuIWkmPDG1qmg&s"
            alt="client"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            {projectDisplay.clientInfo.client}
          </h1>
          <h1 className="font-medium text-gray-600">
            {projectDisplay.clientInfo.role}
          </h1>
        </div>
      </div>
    </div>
  );
}
export default FeedBackSection;
