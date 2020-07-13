import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions/productsAction.js";
//CSS
import "./NavBar.css";
import axios from "axios";

//BARRA DE NAVEGACION DEL SITIO
function NavBar() {
  var isLogin = {};
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);
  console.log(login.data.data.token);
  useEffect(() => verifyLogin(login), []);
  //VERIFICA EL LOGIN
  function verifyLogin(login) {
    var body = {
      token: login.data.data.token,
    };
    axios({
      method: "POST",
      url: "http://localhost:3001/user/me",
      data: body,
    })
      .then(function (res) {
        //console.log(res);
        alert("El usuario esta logueado");
        isLogin = Object.assign({}, res);
      })
      .catch(function (reason) {
        alert("El usuario no esta logueado");
        console.log(reason);
      });
  }
  function algo(isLogin) {
    console.log(isLogin.status);
    if (isLogin.status === 200) {
      return (
        <div className="user_bar">
          <Link to="/" className="login">
            <span> {login.data.data.user.name} </span>
          </Link>
          <Link to="/" className="register">
            <span> Logout </span>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="user_bar">
          <Link to="/usuario/login" className="login">
            <span> Login </span>
          </Link>
          <Link to="/usuario/registrarse" className="register">
            <span> Registrarse </span>
          </Link>
        </div>
      );
    }
  }
  console.log(isLogin);
  return (
    <div className="bar">
      <div className="nav_bar">
        <Link
          to="/"
          onClick={(e) => dispatch(getProducts())}
          className="bar_home"
        >
          <span> Home </span>
        </Link>
        <Link
          to="/"
          onClick={(e) => dispatch(getProducts())}
          className="bar_shop"
        >
          <span> Shop </span>
        </Link>
      </div>
      <div className="user_bar">
        {algo(isLogin)}

        <Link to="/usuario/cart" className="cart">
          <span>
            {" "}
            <i className="fas fa-shopping-cart"></i>{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
