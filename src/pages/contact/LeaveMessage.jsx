import LeadingTitle from "../../components/LeadingTitle";

function LeaveMessage() {
  return (
    <div className="flex justify-center">
      <form action="sendingmail" className="lg:w-[700px] w-full">
        <LeadingTitle text={"Contact Me!"} />
        <div className="py-4 block space-y-2">
          <label htmlFor="clientName" className="text-gray-600 text-lg pe-4">
            Name
          </label>
          <input
            placeholder="Your Name"
            type="text"
            id="clientName"
            name="clientName"
            className=" w-full border-2 border-gray-500 rounded py-2 px-3  focus:outline-none placeholder:text-gray-600  focus:border-purple-600  shadow-sm shadow-gray-600 focus:shadow-purple-600 transition-all duration-300"
          />
        </div>
        <div className="py-4 block space-y-2">
          <label htmlFor="clientEmail" className="text-gray-600 text-lg pe-4">
            Email
          </label>
          <input
            placeholder="Place Your Email here"
            type="text"
            id="clientEmail"
            name="clientEmail"
            className=" w-full border-2 border-gray-500 rounded py-2 px-3  focus:outline-none placeholder:text-gray-600  focus:border-purple-600  shadow-sm shadow-gray-600 focus:shadow-purple-600 transition-all duration-300"
          />
        </div>
        <div className="block space-y-2">
          <label htmlFor="message" className="text-gray-600 text-lg pe-4 py-2">
            Your Message
          </label>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Leave Your Message Here"
              className=" w-full h-[200px] border-2 border-gray-500 rounded py-2 px-3  focus:outline-none placeholder:text-gray-600 focus:border-purple-600 shadow-sm shadow-gray-600 focus:shadow-purple-600 transition-all duration-300  resize-none p-2"
            >
              ghjkl
            </textarea>
          </div>
          <div className="text-end">
            <button
              type="button"
              className="text-black border font-medium border-black  py-1 px-2 rounded hover:bg-black hover:text-white transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default LeaveMessage;
