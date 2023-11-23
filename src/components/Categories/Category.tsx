interface CategoryProp {
  img: string;
  about: string;
  button: string;
}
const Category = ({ img, about, button }: CategoryProp) => {
  return (
    <div className="w-[360px] flex flex-col items-start gap-2">
      <img src={img} className="h-[480px] w-[360px]" />
      <p>{about}</p>
      <button className="px-[8px] text-white py-[6px] bg-[#464545] w-[120px]">
        {button}
      </button>
    </div>
  );
};

export default Category;
