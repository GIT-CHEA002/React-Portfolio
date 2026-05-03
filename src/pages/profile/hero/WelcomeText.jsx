import GetInTouch from "../../../components/button/GetInTouch";
import BrowseProject from "../../../components/button/BrowseProject";
function WelcomeText() {
  return (
    <div className="h-full flex items-center">
      <div className="md:text-start ">
        <h1 className="text-2xl text-gray-600 font-semibold text-center md:text-start">
          Hey, I'm Sokchea 👋🏻
        </h1>
        <div className=" space-y-4 lg:space-y-6 ">
          <h1 className=" text-4xl md:text-8xl font-bold text-wrap text-center md:text-start">
            <span className="text-purple-700/90">Front</span>End Developer
          </h1>
          <p className="text-xl md:text-2xl text-center md:text-start font-semibold text-gray-600">
            I'm a frontend developer based in Italy, I'll help you build
            beautiful websites your users will love.
          </p>
        </div>
        <div className="mt-5 space-x-7 text-center lg:text-start">
          <GetInTouch />
          <BrowseProject />
        </div>
      </div>
    </div>
  );
}
export default WelcomeText;
