function LeadingTitle({ text }) {
  return (
    <h1 className="  text-4xl text-center lg:text-start lg:text-6xl font-bold text-black pt-8 pb-6">
      {text}
      <span className="text-purple-700">.</span>
    </h1>
  );
}
export default LeadingTitle;
