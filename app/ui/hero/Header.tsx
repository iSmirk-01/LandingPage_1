import Logo from '../svg/Logo'
import AndroidStore from '../svg/AndroidStore';
import AppleStore from '../svg/AppleStore';

function Header() {
  return (
    <header className="h-[80px] w-full">
      <main className='items-center w-full h-full flex justify-between px-20 py-10'>
        <div className="flex gap-8">
          <Logo />
          <ul className="flex gap-5 font-semibold items-center">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Carrers</li>
            <li className="cursor-pointer">Help</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-3">
            <li className="cursor-pointer">
              <AndroidStore />
            </li>
            <li className="cursor-pointer">
              <AppleStore />
            </li>
          </ul>
        </div>
      </main>
    </header>
  );
}

export default Header
