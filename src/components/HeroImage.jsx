import HeroPicture from "./../assets/hero_picture.png";
function HeroImage() {
  return (
    <div className="h-full flex lg:items-center items-start justify-center">
      <div className="">
        <img
          src={HeroPicture}
          alt=""
          className="w-auto h-auto object-fit-cover"
        />
      </div>
    </div>
  );
}
export default HeroImage;
