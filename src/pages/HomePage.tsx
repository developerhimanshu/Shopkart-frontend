import Category from "../components/Categories/Category";
import menImage from "../assets/images/MenShoes.jpeg";
import womenImage from "../assets/images/womenShoes.jpeg";
import kidsImage from "../assets/images/kids-shoes.jpg";
import FeaturedShoes from "../components/Featured/Featured";
import f1 from "../assets/images/converse1.jpg";
import Carousel from "../components/Carousel/Carousel";

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
const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[80vh]">
        <Carousel images={images} />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[70vw] flex gap-6">
          {categories.map((category) => {
            return (
              <Category
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
