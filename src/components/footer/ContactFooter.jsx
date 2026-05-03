import GetInTouch from "../button/GetInTouch";
import BrowseProject from "../button/BrowseProject";
import { BiHeart } from "react-icons/bi";

function ContactFooter() {
  return (
    <div className="block lg:flex  justify-between items-center ">
      <div className="space-y-6 lg:space-y-1">
        <h1 className=" text-center text-gray-500 text-2xl font-bold tracking-wide">
          Interested in working together
          <span className="text-purple-600">?</span>
        </h1>
        <div className="flex space-x-6 py-3 justify-center lg:justify-start spay">
          <GetInTouch />
          <BrowseProject />
        </div>
      </div>
      <div className="  text-gray-600 text-center lg:text-end text-lg">
        <h1>2026 All Rights Reserved.</h1>
        <p className="flex items-center justify-center ">
          Made with <BiHeart className=" text-xl text-purple-600" /> by Chea The
          Smos
        </p>
      </div>
    </div>
  );
}
export default ContactFooter;
