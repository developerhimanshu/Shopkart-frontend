import { useEffect, useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

interface propCarouselType {
  images: string[];
}
const Carousel = ({ images }: propCarouselType) => {
  const [index, setIndex] = useState(0);
  const links = [
    '/mens-formals',
    '/womens-formals',
  ]
  console.log(images[index]);
  
  const goPrev = () => {
    console.log(index);
    setIndex((prevInd) => (prevInd === 0 ? images.length - 1 : prevInd - 1));
  };

  const goNext = () => {
    setIndex((prevInd) => (prevInd === images.length - 1 ? 0 : prevInd + 1));
  };


  // setInterval(goNext, 5000);
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 8000);
    return () => clearInterval(interval);
  });
  const arrowStyles =
    "text-gray-400 pt-[10px] pr-[8px] pb-[8px] pl-[13px] absolute top-[40%] bottom-0 mx-auto my-[10px] cursor-pointer";
  return (
    <Link to={links[index]}>
    <div className="relative duration-700 ease-in-out">
      <img
        src={images[index]}
        className="h-[75vh] w-full bg-contain duration-700 ease-in-out"
      />
      <div onClick={goPrev} className={`${arrowStyles} left-0`}>
        <AiFillLeftCircle className="h-[30px] w-[30px]" />
      </div>
      <div onClick={goNext} className={`${arrowStyles} right-0 `}>
        <AiFillRightCircle className="h-[30px] w-[30px]" />
      </div>
   
    </div>
    </Link>
  );
};

export default Carousel;
