const { Orden } = require("../models");
const { Op } = require("sequelize");
const express = require("express").Router();

// No se bien que debería ir en este get, no se si sea necesario traer sólo un carrito (o todos) cuando ya lo traemos en las rutas del usuario
// idUsuario AND state: abierto
express.get("/:idUsuario", function (req, res) {
  Cart.findOne().then(function (cart) {
    res.status(200).json(cart);
  });
});
//Crea carrito
express.post("/add", function (req, res) {});

//Nos falta el modelo Pedido/orden para verificar cual carrito esta abierto
express.put("/empty/:idUsuario", function (req, res) {
  const id = req.params.idUsuario;
  Cart.findOne({
    where: {
      idUsuario: id,
    },
  }).then(function (cart) {
    res.status(200).json(cart);
  });
});

// falta la de crear y actualizar carrito que incluye los productos
// nota mental de gise para gise: en sí un carrito siempre está creado pero con 0 productos, así que si es un usuario invitado (no registrado) se debería crear cuando ingresa a la pagina por primera vez, y si lleno el carrito y se registra debería mantener sus productos

express.delete("/delete/:id", function (req, res) {
  const id = req.params.id;
  Cart.destroy({
    where: {
      id: id,
    },
  })
    .then(function (response) {
      res
        .status(200)
        .json({ message: "Se elimino con exito", count: response });
    })
    .catch(function (err) {
      res
        .status(404)
        .json({ message: "Ocurrió un error, no se pudo eliminar", data: err });
    });
});

module.exports = express;
