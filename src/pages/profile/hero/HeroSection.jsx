import HeroImage from "../../../components/HeroImage";
import WelcomeText from "./WelcomeText";
function HeroSection() {
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 ">
      {/* welcome text */}
      <div className=" lg:order-1 order-2">
        <WelcomeText />
      </div>

      {/* hero image  */}
      <div className=" lg:order-2 order-1">
        <HeroImage />
      </div>
    </div>
  );
}
export default HeroSection;
