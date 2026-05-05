import ContactFooter from "./ContactFooter";
import NavigationFooter from "./NavigationFooter";
function Footer() {
  const footerLinkClass = ({ isActive }) =>
    `font-bold text-gray-500 text-md  hover:text-purple-700  transition-colors ease-in-out first-letter:text-lg duration-400 ${
      isActive ? "text-purple-700" : ""
    }`;
  const footerSocialLinkClass =
    "text-gray-600 text-2xl font-bold hover:text-purple-700 transition-colors duration-300 ease-in-out";
  return (
    <>
      <footer className="mx-auto w-full h-auto px-4 sm:px-6 md:px-16 py-6 ">
        {/*navigation section  */}
        <NavigationFooter
          footerLinkClass={footerLinkClass}
          footerSocialLinkClass={footerSocialLinkClass}
        />
        {/* contact section */}
        <ContactFooter />
      </footer>
    </>
  );
}
export default Footer;
