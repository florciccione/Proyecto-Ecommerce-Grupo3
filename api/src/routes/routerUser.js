const { User, Orden } = require("../models");
const express = require("express").Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

// TODO: traer el usuario + la orden + los productos de esa orden
express.get("/:id", function (req, res) {
  User.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Orden,
        as: "ordenes",
      }
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
  var { name, email, password, adress } = req.body;
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

// actualizar SÓLO información del usuario como nombre y adress, usar el email como clave unica como nombre de usuario para logearse por el momento
express.put("/modify", function (req, res) {
  const { id, name, email, password, adress } = req.body;
  User.update(
    {
      name: name,
      // email: email,
      // password: password,
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

// cambiar contraseña
express.put("/:id/changePassword", function (req, res) {
  const { password } = req.body;
  // TODO:hashear password
  User.update(
    {
      password
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
//RUTA LOGIN 
express.post("/login", function (req, res) {
  var { email, password } = req.body;
  User.findOne({
    where: {
      email
    },
  }).then(function (user) {
    if (bcrypt.compare(password, user.password)){
      const token = jwt.sign({email, password}, 'Roberta2020'); 
      res.json({ message: "Se logueo el usuario", data: { token, user } });
    } else {
      res.json({success: false, message: 'password incorrecta'});
    }
  }).catch(function (err) {
    res
     .status(403)
     .json({ message: "No se encontro el usuario.", data: err });
     //agregar si se puede --> email correcto - contraseña incorrecta
  })
});

module.exports = express;
