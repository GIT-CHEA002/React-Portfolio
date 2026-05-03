import { NavLink } from "react-router";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbRipple } from "react-icons/tb";

function Footer() {
  const footerLinkClass = ({ isActive }) =>
    `font-bold text-gray-500 text-md  hover:text-purple-700  transition-colors ease-in-out first-letter:text-lg duration-400 ${
      isActive ? "text-purple-700" : ""
    }`;
  const footerSocialLinkClass =
    "text-gray-600 text-2xl font-bold hover:text-purple-700 transition-colors duration-300 ease-in-out";
  return (
    <>
      <footer className="mx-auto w-full h-auto px-4 sm:px-6 md:px-24 py-6 bg-blue-100 ">
        <div className=" flex justify-between">
          <ul className="flex gap-4 items-center">
            <NavLink to="/" end className={footerLinkClass}>
              PROFILES
            </NavLink>
            <NavLink to="/project" className={footerLinkClass}>
              PROJECT
            </NavLink>
            <NavLink to="/about" className={footerLinkClass}>
              ABOUT
            </NavLink>
            <NavLink to="/contact" className={footerLinkClass}>
              CONTACT
            </NavLink>
          </ul>
          <ul className="flex gap-4 items-center ">
            <li>
              <a href="https://web.facebook.com/chhun.sokchea.10">
                <BsInstagram className={footerSocialLinkClass} />
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/chhun.sokchea.10">
                <BsFacebook className={footerSocialLinkClass} />
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/chhun.sokchea.10">
                <FaLinkedinIn className={footerSocialLinkClass} />
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/chhun.sokchea.10">
                <TbRipple className={footerSocialLinkClass} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default Footer;
