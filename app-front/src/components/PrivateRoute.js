import { Navigate, useLocation } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ isAuth, children }) => {
//   const { state } = React.useContext(store);
 let location = useLocation();
  //const include = roles === -1 ? false : roles.includes(parseInt(localStorage.getItem('user_role')));
 // const userHasRequiredRole = state.isAuth && include ? true : false;
 // const notSelected = state.dataSelectedClient.length === 0 ? true : false;
  console.log(isAuth,"isAuth")
  console.log(children,"children")

  if (!isAuth) {
    return <Navigate to="/sign-in" state={{ from: location }}/>;
  }

  if (isAuth) {
   return <Navigate to="/home"/>; // build your won access denied page (sth like 404)
  }

//   if(state.isAuth && notSelected && location.pathname !== "/" && !location.pathname.includes("/admin")) {
//     return <Navigate to="/" />;
//   }

  return children;
};

export default PrivateRoute;
