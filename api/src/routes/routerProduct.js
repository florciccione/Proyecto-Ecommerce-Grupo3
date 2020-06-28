const { Product, Category, stockXColor, Colors } = require("../models");
const { Op } = require("sequelize");
const express = require("express").Router();

//const server = express();

//prueba

express.post("/add", function (req, res) {
  const { name, description, price, idCategory, keywords } = req.body;
  Product.create(
    {
      name: name,
      description: description,
      price: price,
      idCategory: idCategory,
      keywords: keywords,
    },
    { fields: ["name", "description", "price", "idCategory", "keywords"] }
  )
    .then(function (response) {
      res
        .status(200)
        .json({ message: "Se creó el producto con exito", data: response });
    })
    .catch(function (reason) {
      res
        .status(404)
        .json({ message: "No se pudo crear el producto", data: reason });
    });
});

express.get("/", function (req, res) {
  Product.findAll({
    include: [
      {
        model: Category,
        as: "categoria",
        attributes: ["name"],
      },
      {
        model: Colors,
      },
    ],
  })
    .then(function (catalogo) {
      res.status(200).json(catalogo);
    })
    .catch(function (reason) {
      res
        .status(404)
        .json({ message: "No se obtuvieron los productos", data: reason });
    });
});

express.get("/stockXColor", function (req, res) {
  stockXColor
    .findAll()
    .then(function (colores) {
      res.status(200).json(colores);
    })
    .catch(function (err) {
      res.status(404).json({ data: err });
    });
});

express.post("/add", function (req, res) {
  const { name, description, price, idCategory, keywords } = req.body;
  Product.create(
    {
      name: name,
      description: description,
      price: price,
      idCategory: idCategory,
      keywords: keywords,
    },
    { fields: ["name", "description", "price", "idCategory", "keywords"] }
  );
});

express.post("/modify", function (req, res) {
  Product.findOne({
    where: {
      id: req.body.id,
    },
  })
    .then(function (product) {
      if (product) {
        var newProducto = {
          name: product.name,
          description: product.description,
          price: product.price,
          idCategory: product.idCategory,
          keywords: product.keywords,
        };
        return product.update(newProducto);
      }
    })
    .catch(function (reason) {
      res
        .status(404)
        .json({ message: "No se obtuvieron los productos", data: reason });
    });
});

express.get("/:category", function (req, res) {
  Category.findOne({
    where: {
      id: req.params.category,
    },
  })
    .then(function (category) {
      Product.findAll({
        where: {
          idCategory: category.id,
        },
      }).then(function (products) {
        res.status(200).json(products);
      });
    })
    .catch(function (err) {
      res.status(404).json({ err: "No se encontro el id", data: err });
    });
});

express.get("/keys/:keywords", function (req, res) {
  var keys = req.params.keywords.split("-").join(" ").toLowerCase();
  console.log(keys);
  Product.findAll({
    where: {
      [Op.or]: [
        {
          keywords: {
            [Op.iLike]: `${keys}`,
          },
        },
        {
          keywords: {
            [Op.substring]: `${keys}`,
          },
        },
      ],
    },
  })
    .then(function (products) {
      res.status(200).json(products);
    })
    .catch(function (err) {
      res.status(404).json({ data: err });
    });
});

express.put("/:id", (req, res) => {
  const { id } = req.params;
  Product.update(
    {
      // Datos
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      idCategory: req.body.idCategory,
      keywords: req.body.keywords,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((response) => {
      const product = response[1][0];
      res.json(product);
      //res.send({ message: "test" });
    })
    .catch((err) => res.send(err.message));
});

express.delete("/:id", (req, res) => {
  const id = req.params.id;
  Product.destroy({
    where: { id: id },
  })
    .then((deletedProduct) => {
      res.json({
        message: "Producto Eliminado",
        count: deletedProduct,
      });
    })
    .catch((err) => res.send(err.message));
});

module.exports = express;
