import Category from "../components/Categories/Category";
import menImage from "../assets/images/MenShoes.jpeg";
import womenImage from "../assets/images/womenShoes.jpeg";
import kidsImage from "../assets/images/kids-shoes.jpg";
import FeaturedShoes from "../components/Featured/Featured";
import f1 from "../assets/images/converse1.jpg";

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
    img: kidsImage,
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

      <div className="mt-[4rem] flex flex-col items-center">
        <p className="uppercase text-center text-[28px] tracking-widest">
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
