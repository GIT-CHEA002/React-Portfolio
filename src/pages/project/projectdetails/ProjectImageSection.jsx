function ProjectImageSection({ projectDisplay }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className=" rounded-xl overflow-hidden my-3">
        <img
          src={projectDisplay.image}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" rounded-xl overflow-hidden my-3">
        <img
          src={projectDisplay.image}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" lg:col-span-2 rounded-xl overflow-hidden my-3">
        <img
          src={projectDisplay.image}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
export default ProjectImageSection;
