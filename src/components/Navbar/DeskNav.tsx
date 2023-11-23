import { BiCart, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const DeskNav = () => {
  return (
    <div className="hidden md:flex h-[10vh]  items-center justify-between px-4 bg-[#f2e6d2]">
      <div>logo</div>
      <div className="text-black flex gap-4">
        <Link to="/products/men">Men</Link>
        <Link to="/products/women">Women</Link>
      </div>
      <div className="flex gap-4">
        <BiSearch size={25} className="cursor-pointer" />
        <BiCart size={25} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default DeskNav;
