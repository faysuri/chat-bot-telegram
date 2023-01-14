import Ensalada from "../images/ensalada.jpg";
import Proteina from "../images/pcv.jpg";
import pollo from "../images/pollo.jpg";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import alm from "../images/almuerzosaludable.jpg";
import almuerzo from "../images/almuerzo.jpg";

export function getData() {
  return [
    { title: "Almuerzo", price: 17.99, Image: Ensalada,id:1 },
    { title: "Burger", price: 15, Image: Proteina,id:2 },
    { title: "Coca", price: 3.5, Image: pollo ,id:3},
    { title: "Kebab", price: 13.99, Image: almuerzo,id:4 },
    { title: "Salad", price: 2.5, Image: saladImg,id:5 },
    { title: "Bottle of water", price: 0.99, Image: waterImg,id:6 },
    { title: "Ice cream", price: 2.99, Image: alm,id:7 },
  ];
}
