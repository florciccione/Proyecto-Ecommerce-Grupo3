const { Orden, User, Product } = require("../models");
const { Op } = require("sequelize");
const express = require("express").Router();

// TODO: traer carrito de un usuario
/* express.get("/:idUsuario", function (req, res) {
  Orden.findAll({
    where: {
      idUsuario: req.params.idUsuario,
    },
  }).then(function (orden) {
    res.status(200).json(orden);
  });
}); */

//   TODO: arreglar esto
express.get("/", function (req, res) {
  Orden.findAll({})
    .then(function (ordenes) {
      res.status(200).json(ordenes);
    })
    .catch(function (reason) {
      res
        .status(404)
        .json({ message: "No se pudo obtener las ordenes", data: reason });
    });
});

// TODO: ruta para modificar la cantidad del carrito
module.exports = express;
