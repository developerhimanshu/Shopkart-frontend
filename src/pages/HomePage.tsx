import Category from "../components/Categories/Category";
import menImage from "../assets/images/MenShoes.jpeg";
import womenImage from "../assets/images/womenShoes.jpeg";
import kidsImage from "../assets/images/kids-shoes.jpg";
import FeaturedShoes from "../components/Featured/Featured";
import f1 from "../assets/images/converse1.jpg";
import cImage1 from "../assets/Images/carousel/shoe1.jpg"
import cImage2 from "../assets/Images/carousel/shoe2.jpg"
import Carousel from "../components/Carousel/Carousel";

const categories = [
  {
    img: menImage,
    about:
      "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
    button: "Shop Men",
    gender:"men"
  },
  {
    img: womenImage,
    about:
      "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
    button: "Shop Women",
    gender:"women",
  },
  {
    img: kidsImage,
    about:
      "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
    button: "Shop Kids",
    gender:"kids"
  },
];
const images = [
  cImage1, cImage2
];
const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[80vh]">
        <Carousel images={images} />
      </div>

      <div className="flex flex-col items-center">
        <p className="uppercase font-bold text-[36px] tracking-widest">
          Categories
        </p>
        <div className="mt-[20px] w-[70vw] flex gap-6">
          {categories.map((category) => {
            return (
              <Category
                gender={category.gender}
                img={category.img}
                about={category.about}
                button={category.button}
                key={category.img}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-[4rem] flex flex-col items-center">
        <p className="uppercase font-bold text-center text-[36px] tracking-widest">
          Featured Products
        </p>
        <div className="w-[90vw] mt-8">
          <FeaturedShoes
            name={"Chuck Taylor All Star"}
            img={f1}
            price={"1234"}
            type={"Unisex High Top Shoe"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
