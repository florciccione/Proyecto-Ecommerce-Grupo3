const { Orden, User } = require("../models");
const { Op } = require("sequelize");
const express = require("express").Router();

express.get("/:idUsuario", function (req, res) {
  Orden.findAll({
    where: {
      idUsuario: req.params.idUsuario,
    },
  }).then(function (orden) {
    res.status(200).json(orden);
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

//TODO: Controlar que no existe una orden ya creada para un usuario usar método findOrCreate
express.post("/add", function (req, res) {
  const { idUsuario, fecha } = req.body;
  User.findOne({
    where: {id: idUsuario}, include: [{model: Orden,as: "ordenes"}],
  }).then(user => {
    var ordenes = JSON.stringify(user.ordenes);
    var ordenActivaExistente = JSON.parse(ordenes).find(orden => orden.state === "creado");
    console.log(ordenActivaExistente);
    if(!ordenActivaExistente){
      Orden.create(
        {
          state: "creado",
          fecha: fecha,
          idUsuario: idUsuario
        }
      ).then(function (orden) {
        res.status(200).json(orden);
      });
    }else{
      res.status(401).json(orden);
    }
  }).catch(err => res.status(404).json({message: "Ocurrió un error, no se pudo agregar usuario", data: err}))
  
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
