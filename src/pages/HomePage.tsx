import Category from "../components/Categories/Category";
import menImage from "../assets/images/MenShoes.jpeg";
import womenImage from "../assets/images/womenShoes.jpeg";
import FeaturedShoes from "../components/Featured/Featured";

const categories = [
  {
    img: menImage,
    about:
      "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
    button: "Shop Men",
  },
  {
    img: womenImage,
    about:
      "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
    button: "Shop Women",
  },
  {
    img: womenImage,
    about:
      "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
    button: "Shop Kids",
  },
];
const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[50vh]">Banner</div>
      <div className="flex flex-col items-center">
        <div className="w-[70vw] flex gap-6">
          {categories.map((category) => {
            return (
              <Category
                img={category.img}
                about={category.about}
                button={category.button}
              />
            );
          })}
        </div>
      </div>

      <div>
        <p className="uppercase text-center">Featured Products</p>
        <FeaturedShoes />
      </div>
    </div>
  );
};

export default HomePage;
