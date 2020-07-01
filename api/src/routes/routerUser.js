const { User, Orden } = require("../models");
const express = require("express").Router();

// Trae a los usuarios con sus carritos correspondientes, lo que no se es si automaticamente el carrito viene con los productos porque esta relacionado a los productos o hay que incluirlo en este get
express.get("/", function (req, res) {
  User.findAll()
    .then(function (users) {
      res.status(200).json(users);
    })
    .catch(function (reason) {
      res
        .status(404)
        .json({ message: "No se obtuvieron los usuarios", data: reason });
    });
});

// trae un solo usuario pa' probar
express.get("/:id", function (req, res) {
  User.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Orden,
        as: "carrito",
        attributes: ["cantidad"],
      },
    ],
  })
    .then(function (user) {
      res.status(200).json(user);
    })
    .catch(function (reason) {
      res
        .status(404)
        .json({ message: "No se obtuvo el usuario", data: reason });
    });
});
// El adress por el momento que sea un string, hay que crear un modelo adress donde va jsutamente toda la info de la direccion (domicilio, ciudad, pais, provincia/estado, codigo postal, etc) y relacionarlo con usuario
express.post("/add", function (req, res) {
  const { name, email, password, adress } = req.body;
  User.create(
    {
      name: name,
      email: email,
      password: password,
      adress: adress,
    },
    {
      fields: ["name", "email", "password", "adress"],
    }
  )
    .then(function (user) {
      res
        .status(200)
        .json({ message: "Se creo correctamente el usuario", data: user });
    })
    .catch(function (err) {
      res.status(404).json({ err: "No se pudo crear el usuario", data: err });
    });
});

// La contraseña deberíamos permitirle actualizarla desde el mismo perfil? o de una ruta aparte?
express.put("/modify", function (req, res) {
  const { id, name, email, password, adress } = req.body;
  User.update(
    {
      name: name,
      email: email,
      password: password,
      adress: adress,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  ).then(function (respuesta) {
    const user = respuesta[1][0];
    res.status(200).json({ message: "Se cambio con exito", data: user });
  });
});

express.delete("/delete/:id", function (req, res) {
  const id = req.params.id;
  User.destroy({
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
