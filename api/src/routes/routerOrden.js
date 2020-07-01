const { Orden } = require("../models");
const { Op } = require("sequelize");
const express = require("express").Router();

express.get("/:idUsuario", function (req, res) {
  Cart.findOne({
    where: {
      idUsuario: req.params.idUsuario,
    },
  }).then(function (cart) {
    res.status(200).json(cart);
  });
});
express.get("/", function (req, res) {
  Orden.findAll()
    .then(function (ordenes) {
      res.status(200).json(ordenes);
    })
    .catch(function (reason) {
      res
        .status(404)
        .json({ message: "No se pudo obtener las ordenes", data: reason });
    });
});

express.put("/modify", function (req, res) {
  const { id, state, fecha } = req.body;
  Orden.update(
    {
      state: state,
      fecha: fecha,
    },
    {
      where: {
        id: id,
      },
    }
  ).then(function (cart) {
    res.status(200).json(cart);
  });
});

express.delete("/delete/:id", function (req, res) {
  const id = req.params.id;
  Orden.destroy({
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
