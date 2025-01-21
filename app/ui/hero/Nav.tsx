import Logo from "../svg/Logo";
import AndroidStore from "../svg/AndroidStore";
import AppleStore from "../svg/AppleStore";
import { IoIosMenu } from "react-icons/io";

function Header() {
  return (
    <nav className="minh-h-[80px] w-full">
      <main className="flex items-center w-full h-full justify-between px-20 py-10">
        <div className="flex gap-8">
          <Logo aria-label="Company Logo" />
          <ul className="hidden lg:flex gap-5 font-semibold items-center">
            <li className="cursor-pointer">
              <button>Features</button>
            </li>
            <li className="cursor-pointer">
              <button>Pricing </button>
            </li>
            <li className="cursor-pointer">
              <button>Carrers</button>
            </li>
            <li className="cursor-pointer">
              <button>Help</button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex gap-3">
            <li className="cursor-pointer">
              <AndroidStore aria-label="Download on android" />
            </li>
            <li className="cursor-pointer">
              <AppleStore aria-label="Download on Apple store" />
            </li>
          </ul>
          <IoIosMenu className="text-4xl cursor-pointer lg:hidden" />
        </div>
      </main>
    </nav>
  );
}

export default Header;
