import DottedGlobe from "./DottedGlobe";
import MyStack from "./MyStack";
function StackAndPlaceSection({ skills }) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-stretch ">
      <MyStack skills={skills} />
      <div className="flex-1 flex flex-col ">
        <h1 className="text-3xl font-bold py-3">My Special Place.</h1>
        <div className="flex-1 relative rounded-2xl">
          <DottedGlobe />
        </div>
      </div>
    </div>
  );
}
export default StackAndPlaceSection;
