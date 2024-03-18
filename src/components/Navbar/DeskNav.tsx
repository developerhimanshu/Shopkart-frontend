import { BiCart, BiSearch, BiUser} from "react-icons/bi";

import { Link } from "react-router-dom";
const DeskNav = () => {
  return (
    <div className="hidden md:flex h-[10vh]  items-center justify-between px-4 bg-white sticky top-0 z-10 shadow-md">
      <Link to="/"><span className="uppercase font-semibold">Joota.com</span></Link>
      <div className="text-black flex gap-4">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>
      <div className="flex gap-4 items-center">
      <BiSearch size={20} className="text-gray-300  cursor-pointer  z-10" />
        <input type="text" className="outline-none px-2 py-[6px] rounded-full ml-[-45px] pl-[36px] font-thin text-s w-[400px] bg-gray-100" placeholder="Search for products..."/>

        <Link to="/account">
         <BiUser size={25}/>
        </Link>

        <Link to="/cart">
          <BiCart size={25} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default DeskNav;
