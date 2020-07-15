import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions/productsAction.js";
import { logoutUser } from "../Redux/actions/userAction.js";
//CSS
import "./NavBar.css";
import axios from "axios";

//BARRA DE NAVEGACION DEL SITIO
function NavBar() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);
  const [isLogin, setLogin] = useState(false);
  // console.log(login.data.data.token);

  useEffect(() => verifyLogin(login), []);
  //VERIFICA EL LOGIN

  function verifyLogin(login) {
    if (login.data === undefined) {
      setLogin(false);
    } else {
      var body = {
        token: login.data.data.token,
      };
      axios({
        method: "POST",
        url: "http://localhost:3001/user/me",
        data: body,
      })
        .then(function (res) {
          setLogin(true);
        })
        .catch(function (reason) {
          alert("El usuario no esta logueado");
          console.log(reason);
        });
    }
  }
  function algo() {
    if (isLogin) {
      return (
        <div className="user_bar">
          <Link to="/" className="login">
            <span> {login.data.data.user.name} </span>
          </Link>
          <Link to="/" className="register" onClick={dispatch(logoutUser())}>
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
  //console.log(isLogin);
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
        {algo()}

        <Link to="/usuario/cart" className="cart">
          <span>
            <i className="fas fa-shopping-cart"></i>{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
