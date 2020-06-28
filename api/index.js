//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require("./src/app.js");
const {
  conn,
  Product,
  Category,
  Colors,
  stockXColor,
} = require("./src/models/index.js");
//const images = require("../images");
//Products
const productos = [
  {
    name: "Pulsera Noruega",
    description:
      "Pulsera en gamuza con cristal de roca facetado, agatas y detalles de metal.",
    price: "1050",
    idCategory: "5",
    keywords: "[pulseras, gamuza, agatas, metal, piedras, cristales]",
    image: "urlFotoCollar",
  }, //1
  {
    name: "Pulsera Cubos",
    description: "Pulsera en gamuza con cristales cúbicos y detalles de metal.",
    price: "1150",
    idCategory: "5",
    keywords: "[pulseras, gamuza, metal, cristales, cubos, cúbicos, cuadrados]",
    image: "urlFotoPulsera",
  }, //2
  {
    name: "Pulsera Quebec",
    description:
      "Pulsera elastizada triple de cristal de roca facetado, con detalles de metal.",
    price: "850",
    idCategory: "5",
    keywords:
      "[pulseras, elastizada, triple, metal, cristales, brazalete, fiesta, noche]",
    image: "urlFotoAritos",
  },
  {
    name: "Pulsera Medieval",
    description:
      "Pulsera diseñada con cristales de roca facetados y detalles de metal.",
    price: "990",
    idCategory: "5",
    keywords: "[pulseras, metal, cristales]",
    image: "urlFotoAritos",
  },
];
const stockColor = [
  // 3 colores para un mismo producto
  {
    cantidad: "3",
    image: "../../",
    main: true,
    productId: "1",
    colorId: "1",
  }, // collar tiene 3u. y es rojo
  {
    cantidad: "7",
    image: "img/pulseras/p-noruega-rojo.jpg",
    productId: "1",
    colorId: "2",
    main: false,
  }, //======================================================================================
  {
    cantidad: "5",
    image: "img/pulseras/cubos-gamuza.jpg",
    productId: "2",
    colorId: "3",
    main: true,
  },
  // cambio de producto
  {
    cantidad: "1",
    image: "img/pulseras/cubos-gamuza2.jpg",
    productId: "2",
    colorId: "4",
    main: false,
  }, //======================================================================================
  {
    cantidad: "8",
    image: "img/pulseras/p-quebec-humo.jpg",
    productId: "3",
    colorId: "5",
    main: true,
  },

  {
    cantidad: "16",
    image: "img/pulseras/p-quebec-azul.jpg",
    productId: "3",
    colorId: "6",
    main: false,
  }, //======================================================================================
  {
    cantidad: "8",
    image: "img/pulseras/p-medieval-ambar.jpg",
    productId: "4",
    colorId: "4",
    main: true,
  },

  {
    cantidad: "16",
    image: "img/pulseras/p-medieval-humo.jpg",
    productId: "4",
    colorId: "5",
    main: false,
  },
];

const colores = [
  { name: "Negro", hexaColor: "#000000" }, //1
  { name: "Rojo", hexaColor: "#ff3636" }, //2
  { name: "Aqua", hexaColor: "#9bcfcb" },
  { name: "Ambar", hexaColor: "#f5b277" },
  { name: "Humo", hexaColor: "#b4b0b0" },
  { name: "Azul", hexaColor: "#2329ff" },
];

const categorias = [
  { name: "Collares cortos" }, //1
  { name: "Collares largos" }, //2
  { name: "Chokers" },
  { name: "Rosarios" },
  { name: "Pulseras" },
  { name: "Aros" },
];
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  colores.forEach((col) => Colors.create(col));
  categorias.forEach((cat) => Category.create(cat));
  productos.forEach((pro) => Product.create(pro));
  stockColor.forEach((sto) => stockXColor.create(sto));
  server.listen(3000, () => {
    console.log("%s listening at 3000"); // eslint-disable-line no-console
  });
});
