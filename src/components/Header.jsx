import { UserRound, Heart, ShoppingBag, Search } from "lucide-react";

import LOGO from "../../public/myntra-logo-removebg.png";
const Header = () => {
  return (
    <header className="flex  items-center justify-between px-4 py-2 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        <img src={LOGO} alt="Logo" className="h-8 w-12" />
        <nav>
          <ul className="flex space-x-10 text-sm font-medium">
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>HOME & LIVING</li>
            <li>BEAUTY</li>
            <li>
              STUDIO<sup className="text-xs text-pink-500">NEW</sup>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center space-x-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="pl-10 pr-4 py-2 w-96 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div className="flex space-x-8 text-sm">
          <div className="flex flex-col items-center">
            <UserRound className="h-5 w-5" />
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center">
            <Heart className="h-5 w-5" />
            <span>Wishlist</span>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBag className="h-5 w-5" />
            <span>Bag</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
