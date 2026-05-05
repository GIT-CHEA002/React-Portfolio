import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
function ToggleButtonSmallScreen({ jobs, activeJob, setActiveJob }) {
  return (
    <div className="flex justify-end space-x-4 lg:hidden mt-3 ">
      <button
        onClick={() => {
          if (activeJob > 0) {
            setActiveJob(activeJob - 1);
          }
        }}
        className={`${activeJob === 0 ? "hidden" : "block text-3xl hover:text-purple-600 transition-colors duration-500"}`}
      >
        <IoArrowBackCircleOutline />
      </button>
      <button
        type="button"
        onClick={() => {
          if (activeJob < jobs.length - 1) {
            setActiveJob(activeJob + 1);
          }
        }}
        className={`${activeJob === jobs.length - 1 ? "hidden" : "block text-3xl hover:text-purple-600 transition-colors duration-500 "}`}
      >
        <IoArrowForwardCircleOutline />
      </button>
    </div>
  );
}
export default ToggleButtonSmallScreen;
