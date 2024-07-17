import React from "react";
import TypeOfCategorie from "../TypeOfCategorie/TypeOfCategorie";
import "./CategoriesWrap.scss";

const categories = {
  bodyTypes: [
    {
      id: 1,
      title: "Pear",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_BODYSUIT_01_BLACK_03.jpg?v=1713974502&width=768&crop=center",
    },
    {
      id: 2,
      title: "Apple",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_DRESS_18_BEIGE_03.jpg?v=1713974902&width=768&crop=center",
    },
    {
      id: 3,
      title: "HourGlass",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_KNITWEAR_02_DRESS_CREAM_03.jpg?v=1713975120&width=768&crop=center",
    },
    {
      id: 4,
      title: "Rectangle",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_DRESS_12_BLACK_04.jpg?v=1713974860&width=768&crop=center",
    },
    {
      id: 5,
      title: "Inverted Triangle",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_SKIRT_01_WHITE_03.jpg?v=1706568590&width=768&crop=center",
    },
  ],
  appearanceTypes: [
    {
      id: 6,
      title: "Gamin",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/PF20_LEATHER_07_JACKET_BLACK_03.jpg?v=1656506226&width=768&crop=center",
    },
    {
      id: 7,
      title: "Romantic",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/PF23_DRESS_09_BEIGE_03.jpg?v=1684433167&width=768&crop=center",
    },
    {
      id: 8,
      title: "Natural",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/RE23_CROCHET_04_DRESS_BEIGE_03.jpg?v=1669035375&width=768&crop=center",
    },
    {
      id: 9,
      title: "Dramatic",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/PF23_SKIRT_04_BLACK_03.jpg?v=1684432366&width=768&crop=center",
    },
    {
      id: 10,
      title: "Gamin-Romantic",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_DENIM_08_DRESS_BLACK_03.jpg?v=1706566809&width=768&crop=center",
    },
    {
      id: 11,
      title: "Gamin-Natural",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_DENIM_05_SHORTS_LIGHT_BLUE_03.jpg?v=1706566736&width=768&crop=center",
    },
    {
      id: 12,
      title: "Gamin-Dramatic",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_DRESS_12_BLACK_03.jpg?v=1706567051&width=768&crop=center",
    },
    {
      id: 13,
      title: "Romantic-Gamin",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_BLOUSE_06_BLACK_PRINT_03.jpg?v=1706566292&width=768&crop=center",
    },
    {
      id: 14,
      title: "Romantic-Natural",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/SS23_CROCHET_05_PANTS_CREAM_03.jpg?v=1675703307&width=768&crop=center",
    },
    {
      id: 15,
      title: "Romantic-Dramatic",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/MTH23_BLOUSE_04_RED_03.jpg?v=1697807762&width=768&crop=center",
    },
    {
      id: 16,
      title: "Natural-Gamin",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/RE24-DENIM-04-CORSET-BLUE_03.jpg?v=1700049587&width=768&crop=center",
    },
    {
      id: 17,
      title: "Natural-Romantic",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/RE24-DRESS-16-CREAM_03.jpg?v=1700055161&width=768&crop=center",
    },
    {
      id: 18,
      title: "Natural-Dramatic",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_DRESS_04_YELLOW_03.jpg?v=1706566916&width=768&crop=center",
    },
    {
      id: 19,
      title: "Dramatic-Gamin",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_SKIRT_06_CREAM_03.jpg?v=1706568644&width=768&crop=center",
    },
    {
      id: 20,
      title: "Dramatic-Romantic",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/RE24-DRESS-15-RED_03.jpg?v=1699973160&width=768&crop=center",
    },
    {
      id: 21,
      title: "Dramatic-Natural",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/RE24-DRESS-12-GREEN_03.jpg?v=1700041101&width=768&crop=center",
    },
  ],
  colorTypes: [
    {
      id: 22,
      title: "Cold Winter",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_DRESS_08_BEIGE_03.jpg?v=1713974797&width=768&crop=center",
    },
    {
      id: 23,
      title: "Warm Winter",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_KNITWEAR_14_DRESS_CREAM_04.jpg?v=1713975255&width=768&crop=center",
    },
    {
      id: 24,
      title: "Cold Spring",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/RE23_DRESS_04_PINK_05.jpg?v=1669036998&width=768&crop=center",
    },
    {
      id: 25,
      title: "Warm Spring",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/AW23_DRESS_25_BLUE_03.jpg?v=1691766386&width=768&crop=center",
    },
    {
      id: 26,
      title: "Cold Summer",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/PF20_DENIM_TOTENESS_PANTS_NAVY_03.jpg?v=1656505868&width=768&crop=center",
    },
    {
      id: 27,
      title: "Warm Summer",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/RE24-SWIM-BRA-01-YELLOW_03.jpg?v=1699972952&width=768&crop=center",
    },
    {
      id: 28,
      title: "Cold Autumn",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/MTH23_LEATHER_05_HOOD_BROWN_04.jpg?v=1697808083&width=768&crop=center",
    },
    {
      id: 29,
      title: "Warm Autumn",
      img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/PF23_BLOUSE_07_RED_05.jpg?v=1684430189&width=768&crop=center",
    },
  ],
};
const CategoriesWrap = () => {
  return (
    <div className="pageCategories">
      <div className="pageCategories__variants">
        <TypeOfCategorie
          title="Body Type"
          info={categories.bodyTypes}
          columns="five"
        />
        <TypeOfCategorie
          title="Type of Appearance"
          info={categories.appearanceTypes}
          columns="four"
        />
        <TypeOfCategorie
          title="Color Type"
          info={categories.colorTypes}
          columns="two"
        />
      </div>
    </div>
  );
};

export default CategoriesWrap;
