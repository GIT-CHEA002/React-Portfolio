function LeadingTitle({ text }) {
  return (
    <h1 className="text-6xl font-bold text-black py-10">
      {text}
      <span className="text-purple-700">.</span>
    </h1>
  );
}
export default LeadingTitle;
