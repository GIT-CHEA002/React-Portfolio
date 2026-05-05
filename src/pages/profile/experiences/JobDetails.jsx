import { GiCheckMark } from "react-icons/gi";
function JobDetails({ jobs, activeJob }) {
  return (
    <div className=" flex-1  space-y-2">
      <h1 className=" text-3xl text-gray-800 font-bold tracking-wide">
        {jobs[activeJob].title}
        <span className=" text-purple-600 ms-2">
          @{jobs[activeJob].company}
        </span>
      </h1>
      <h1 className=" text-gray-600 text-base font-semibold mb-12">
        {jobs[activeJob].date}
      </h1>
      <div className=" pt-4">
        <ul className="space-y-4 ">
          {jobs[activeJob].bullets.map((bullet, index) => {
            return (
              <li key={index} className="flex lg:items-center">
                <GiCheckMark className="text-purple-700  me-2 text-2xl lg:text-3xl" />
                <span className="lg:text-xl text-gray-600">{bullet}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default JobDetails;
