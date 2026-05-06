import ContactImage from "./ContactImage";
import ContactText from "./ContactText";

function ContactGridSection() {
  return (
    <div className="w-full items-center h-full grid grid-cols-1  lg:grid-cols-2 ">
      <ContactText />
      <ContactImage />
    </div>
  );
}
export default ContactGridSection;
