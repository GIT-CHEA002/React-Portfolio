import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbRipple } from "react-icons/tb";
function NavigationFooter({ footerLinkClass, footerSocialLinkClass }) {
  return (
    <div className=" block space-y-6 lg:space-y-0 lg:flex items-center justify-between py-12">
      <div className="flex space-x-6 items-center justify-center lg:justify-start">
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
      </div>
      <ul className="flex space-x-6 items-center justify-center lg:justify-start">
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
  );
}
export default NavigationFooter;
