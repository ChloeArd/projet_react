import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";

let content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel augue vitae ligula finibus mollis. Cras tempor vel arcu hendrerit facilisis. Nunc non neque tristique, maximus dolor non, vestibulum mi.";

export const promotions = [
  {
    id: 1,
    category: 2,
    cart: 1,
    title: "Produit 1",
    image: image1,
    description: content,
    price: 230,
    stock: 12,
  },
  {
    id: 2,
    category: 2,
    cart: 0,
    title: "Produit 2",
    image: image2,
    description: content,
    price: 230,
    stock: 35,
  },
];
