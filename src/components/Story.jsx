import LeadingTitle from "./LeadingTitle";

function Story({ storys }) {
  return (
    <div>
      <LeadingTitle text={"My Story"} />
      <ul>
        {storys.map((story, index) => {
          return (
            <li key={index} className="text-xl text-gray-600 py-3">
              {story}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Story;
