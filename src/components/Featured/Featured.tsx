import { Link } from "react-router-dom";

interface featuredType {
  img: string;
  name: string;
  price: string;
  type: string;
}

const FeaturedShoes = ({ img, name, price, type }: featuredType) => {
  return (
    <div>
      <Link to="/">
        <img src={img} className="h-[350px]" />
      </Link>
      <Link to="/">{name}</Link>
      <p>₹{price}</p>
      <p className="uppercase font-bold text-[10px] text-gray-400">{type}</p>
    </div>
  );
};

export default FeaturedShoes;
