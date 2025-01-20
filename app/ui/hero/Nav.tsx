import Logo from "../svg/Logo";
import AndroidStore from "../svg/AndroidStore";
import AppleStore from "../svg/AppleStore";

function Header() {
  return (
    <nav className="h-[80px] w-full">
      <main className="items-center w-full h-full flex justify-between px-20 py-10">
        <div className="flex gap-8">
          <Logo aria-label="Company Logo" />
          <ul className="flex gap-5 font-semibold items-center">
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
        <div>
          <ul className="flex gap-3">
            <li className="cursor-pointer">
              <AndroidStore aria-label="Download on android" />
            </li>
            <li className="cursor-pointer">
              <AppleStore aria-label="Download on Apple store" />
            </li>
          </ul>
        </div>
      </main>
    </nav>
  );
}

export default Header;
