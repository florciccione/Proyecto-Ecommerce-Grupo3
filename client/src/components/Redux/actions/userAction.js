import axios from "axios";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAIL_LOGIN = "FAIL_LOGIN";
export function loginUser(data) {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "http://localhost:3001/user/login",
      data: data,
    })
      .then(function (res) {
        //console.log(res.data);
        dispatch(sucessLogin(res));
        alert("La cuenta se creo con éxito");
      })
      /* .then(function () {
              
            }) */
      .catch(function (reason) {
        console.log(reason);
        dispatch(failLogin(reason));
      });

    // alert("No se pudo crear la cuenta de usuario " + reason)
  };
}

export const sucessLogin = (data) => {
  return {
    type: SUCCESS_LOGIN,
    payload: data,
  };
};
export const failLogin = (data) => {
  return {
    type: FAIL_LOGIN,
    payload: data,
  };
};
