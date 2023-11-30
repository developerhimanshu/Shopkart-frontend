import { useEffect, useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

interface propCarouselType {
  images: string[];
}
const Carousel = ({ images }: propCarouselType) => {
  const [index, setIndex] = useState(0);
  const goPrev = () => {
    console.log(index);
    setIndex((prevInd) => (prevInd === 0 ? images.length - 1 : prevInd - 1));
  };

  const goNext = () => {
    setIndex((prevInd) => (prevInd === images.length - 1 ? 0 : prevInd + 1));
  };

  const goToDot = (ind: number) => {
    setIndex(ind);
  };
  // setInterval(goNext, 5000);
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 3000);

    return () => clearInterval(interval);
  });
  const arrowStyles =
    "text-gray-400 pt-[10px] pr-[8px] pb-[8px] pl-[13px] absolute top-[40%] bottom-0 mx-auto my-[10px] cursor-pointer";
  return (
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
      <div className="flex gap-3 justify-center absolute bottom-2 left-[45%] z-30">
        {images.map((_, ind) => (
          <div
            onClick={() => {
              goToDot(ind);
            }}
            className={`w-3 h-3 rounded-full ${
              ind == index ? "bg-red-500" : "bg-black"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
