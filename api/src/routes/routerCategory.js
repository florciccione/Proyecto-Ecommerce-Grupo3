const { Category } = require("../models");
const express = require("express").Router();

express.get("/", function (req, res) {
  Category.findAll().then(function (categories) {
    res.status(200).json(categories);
  });
});

express.post("/add", function (req, res) {
  const { name } = req.body;
  Category.create(
    {
      name: name,
    },
    { fields: ["name"] }
  )
    .then(function (category) {
      res
        .status(200)
        .json({
          message: "Se creo correctamente la categoria",
          data: category,
        });
    })
    .catch(function (err) {
      res.status(404).json({ err: "No se creó la categoria" });
    });
});

express.put("/modify", function (req, res) {
  const { id, name } = req.body;
  Category.update(
    {
      name: name,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  ).then(function (respuesta) {
    const category = respuesta[1][0];
    res.status(200).json({ message: "Se cambio con exito", data: category });
  });
});

express.delete("/delete/:id", function (req, res) {
  const id = req.params.id;
  Category.destroy({
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
