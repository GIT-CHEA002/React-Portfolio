import LeadingTitle from "../../../components/LeadingTitle";

function DetailSection({ projectDisplay }) {
  return (
    <div className="block lg:flex py-4 lg:relative items-start space-x-0 lg:space-x-12">
      {/* left container */}
      <div className="lg:w-[400px] w-full lg:sticky top-20  ">
        <div className="block py-4 px-6 space-y-6 rounded-xl border border-purple-600 shadow-md shadow-purple-600">
          <div className="flex justify-between space-x-6">
            <div className="w-[50%] ">
              <span className="text-gray-600">Client</span>
              <h1 className=" text-black text-2xl font-medium">
                {projectDisplay.clientInfo.client}
              </h1>
            </div>
            <div className=" w-[50%]  text-start">
              <span className="text-gray-600">Year</span>
              <h1 className=" text-black text-2xl font-medium">
                {projectDisplay.clientInfo.createYear}
              </h1>
            </div>
          </div>
          <div>
            <span className="text-gray-600">My Role</span>
            <h1 className=" text-black text-2xl font-medium">
              {projectDisplay.clientInfo.role}
            </h1>
          </div>
        </div>
      </div>
      {/* right content */}
      <div className=" flex-1  ">
        {/* details */}
        <div>
          <LeadingTitle text={"About"} />
          <h1 className="text-gray-600 text-xl">{projectDisplay.detail}</h1>
        </div>
        {/* our clients */}
        <div>
          <LeadingTitle text={"Our Client"} />
          <h1 className="text-gray-600 text-xl">{projectDisplay.feedback}</h1>
        </div>
        {/* challenge */}

        <div>
          <LeadingTitle text={"Challenges"} />
          <h1 className="text-gray-600 text-xl">{projectDisplay.challenges}</h1>
        </div>
        {/* result */}
        <div>
          <LeadingTitle text={"Result"} />
          <h1 className="text-gray-600 text-xl">{projectDisplay.result}</h1>
        </div>
      </div>
    </div>
  );
}
export default DetailSection;
