import { Link } from "react-router-dom";

interface CategoryProp {
  img: string;
  about: string;
  button: string;
  gender:string;
}
const Category = ({gender, img, about, button }: CategoryProp) => {
  return (
    <div className="w-[360px] flex flex-col items-start gap-2">
      <img src={img} className="h-[360px] w-[280px]" />
      <p>{about}</p>
      <Link to={`/product/${gender}`}>
      <div className="px-[8px] text-white py-[6px] bg-[#464545] w-[120px]">
        {button}
      </div>
      </Link>
    </div>
  );
};

export default Category;
