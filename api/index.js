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
  User,
  Orden,
  lineaDeOrden,
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
    keywords: "pulseras,gamuza,agatas,metal,piedras,cristales",
    image: "urlFotoCollar",
  }, //1
  {
    name: "Pulsera Cubos",
    description: "Pulsera en gamuza con cristales cúbicos y detalles de metal.",
    price: "1150",
    idCategory: "5",
    keywords: "pulseras,gamuza,metal,cristales,cubos,cúbicos,cuadrados",
    image: "urlFotoPulsera",
  }, //2
  {
    name: "Pulsera Quebec",
    description:
      "Pulsera elastizada triple de cristal de roca facetado, con detalles de metal.",
    price: "850",
    idCategory: "5",
    keywords:
      "pulseras,elastizada,triple,metal,cristales,brazalete,fiesta,noche",
    image: "urlFoto",
  }, //3
  {
    name: "Pulsera Medieval",
    description:
      "Pulsera diseñada con cristales de roca facetados y detalles de metal.",
    price: "990",
    idCategory: "5",
    keywords: "pulseras,metal,cristales",
    image: "urlFoto",
  }, //4
  {
    name: "Aro Argolla Strass",
    description: "Aro argollas de cristal facetado con strass.",
    price: "650",
    idCategory: "6",
    keywords: "strass,aros,argollas,fiesta,noche",
    image: "urlFotoAritos",
  }, //5
  {
    name: "Choker zig-zag",
    description:
      "Choker con diseño en zig-zag y detalles de metal, confeccionado en perlas o metal color niquel.",
    price: "690",
    idCategory: "3",
    keywords: "chokers,perlas,metal,niquel,gargantillas",
    image: "urlFoto",
  }, //6
  {
    name: "Collar Rusia",
    description: "Collar de cristal de roca facetado con detalles de metal.",
    price: "1490",
    idCategory: "1",
    keywords: "collares,cortos,cristales,negro,noche,fiesta",
    image: "c-rusia-boreal2.jpg",
  }, //7
  {
    name: "Collar India",
    description:
      "Collar largo de madera, critales y hematite con borla y detalles de metal.",
    price: "870",
    idCategory: "2",
    keywords: "collares,largos,cristales,negro,blanco,madera,bohemio,hippie",
    image: "c-india_bco2.jpg",
  }, //8
];
const stockColor = [
  // 2 colores para un mismo producto
  {
    cantidad: "3",
    image: "p-noruega-negro.jpg",
    main: true,
    productId: "1",
    colorId: "1",
  }, // collar tiene 3u. y es negro
  {
    cantidad: "7",
    image: "p-noruega-rojo.jpg",
    productId: "1",
    colorId: "2",
    main: false,
  }, //======================================================================================
  {
    cantidad: "5",
    image: "cubos-gamuza.jpg",
    productId: "2",
    colorId: "3",
    main: true,
  },
  // cambio de producto
  {
    cantidad: "1",
    image: "cubos-gamuza2.jpg",
    productId: "2",
    colorId: "4",
    main: false,
  }, //======================================================================================
  {
    cantidad: "8",
    image: "p-quebec-humo.jpg",
    productId: "3",
    colorId: "5",
    main: true,
  },

  {
    cantidad: "16",
    image: "p-quebec-azul.jpg",
    productId: "3",
    colorId: "6",
    main: false,
  }, //======================================================================================
  {
    cantidad: "8",
    image: "p-medieval-ambar.jpg",
    productId: "4",
    colorId: "4",
    main: true,
  },

  {
    cantidad: "16",
    image: "p-medieval-humo.jpg",
    productId: "4",
    colorId: "5",
    main: false,
  }, //======================================================================================
  {
    cantidad: "3",
    image: "a-argolla-strass-negro.jpg",
    main: true,
    productId: "5",
    colorId: "1",
  }, //======================================================================================
  {
    cantidad: "3",
    image: "ch-zz-niquel.jpg",
    main: true,
    productId: "6",
    colorId: "5",
  }, //======================================================================================
  {
    cantidad: "2",
    image: "c-rusia-boreal.jpg",
    main: true,
    productId: "7",
    colorId: "5",
  }, //======================================================================================
  {
    cantidad: "2",
    image: "c-india-bco.jpg",
    main: true,
    productId: "8",
    colorId: "1",
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
const ordenes = [
  { state: "creado", fecha: "HOY", idUsuario: "1" },
  { state: "completo", fecha: "AYER", idUsuario: "1" },
];
const lineaOrden = [
  { cantidad: "2", price: "700", productId: "1", ordenId: "1" },
  { cantidad: "2", price: "400", productId: "2", ordenId: "2" },
];
const usuarios = [
  {
    name: "Gisella Alaniz",
    email: "gisella@gmail.com",
    password: "cualquiera",
    adress: "calle1",
  },
  {
    name: "Leandro Arévalo",
    email: "leandro@gmail.com",
    password: "cualquiera",
    adress: "calle2",
  },
  {
    name: "Florencia Ciccione",
    email: "florencia@gmail.com",
    password: "cualquiera",
    adress: "calle3",
  },
  {
    name: "Juan Galarce",
    email: "juan@gmail.com",
    password: "cualquiera",
    adress: "calle4",
  },
];
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  colores.forEach((col) => Colors.create(col));
  categorias.forEach((cat) => Category.create(cat));
  productos.forEach((pro) => Product.create(pro));
  stockColor.forEach((sto) => stockXColor.create(sto));
  usuarios.forEach((user) => User.create(user));
  ordenes.forEach((or) => Orden.create(or));
  lineaOrden.forEach((lineor) => lineaDeOrden.create(lineor));
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
