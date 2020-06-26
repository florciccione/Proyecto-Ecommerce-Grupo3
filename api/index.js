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

const server = require('./src/app.js');
const { conn, Product, Category, Colors, stockXColor } = require('./src/models/index.js');
//Products
const productos = [
  {name: "collar", description: "Collar esmeralda", price: "400", idCategory: "1", keywords: "collar esmeralda lindo mujer", image: "urlFotoCollar"},//1
  {name: "Pulsera", description: "Pulsera amarilla", price: "180", idCategory: "2", keywords: "pulsera roja perlas", image: "urlFotoPulsera"},//2
  {name: "aritos de oro", description: "Aritos de oro 10mm", price: "1000", idCategory: "3", keywords: "aritos oro amarillo unicos", image: "urlFotoAritos"}//3
]
const stockColor = [
  // 3 colores para un mismo producto
  {idColor: "1", cantidad: "3", idProducto: "1", image: "urlDePrueba"}, // collar tiene 3u. y es rojo
  {idColor: "2", cantidad: "7", idProducto: "1",  image: "urlDePrueba"},//imagen de idProducto y ID color
  {idColor: "3", cantidad: "5", idProducto: "1", image: "urlDePrueba"},
  // cambio de producto
  {idColor: "1", cantidad: "1", idProducto: "2", image: "urlDePrueba"},
  {idColor: "2", cantidad: "8", idProducto: "2", image: "urlDePrueba"},
  // cambio de producto
  {idColor: "3", cantidad: "16", idProducto: "3", image: "urlDePrueba"}
 
]

const colores = [
  {name: "rojo", hexaColor: "#FF0000"},//1
  {name: "amarillo", hexaColor: "#F7FE2E"},//2
  {name: "verde", hexaColor: "#00FF00"}//3
]

const categorias = [
  {name: "collar"},//1
  {name: "pulsera"},//2
  {name: "arito"}//3
]
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  colores.forEach(col => Colors.create(col))
  categorias.forEach(cat => Category.create(cat))
  productos.forEach(pro => Product.create(pro))
  stockColor.forEach(sto => stockXColor.create(sto))
  server.listen(3000, () => {
    console.log('%s listening at 3000'); // eslint-disable-line no-console
  });
});
