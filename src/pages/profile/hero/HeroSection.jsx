import HeroImage from "./HeroImage";
import WelcomeText from "./WelcomeText";
function HeroSection() {
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 ">
      {/* welcome text */}
      <WelcomeText />
      {/* hero image  */}
      <HeroImage />
    </div>
  );
}
export default HeroSection;
