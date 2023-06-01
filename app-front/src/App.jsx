import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./widgets/layout/navbar";
import routes from "./routes";
import { store } from "./reducer/store";
import PrivateRoute from "./components/PrivateRoute";
import { Profile } from "./pages/profile";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Home } from "./pages/home";
import  Settings from "./pages/settings";
import Logout from "./pages/logout";

function App() {
  const { state } = React.useContext(store);

  return (
    <>
      <div className="container mx-auto p-4">
        {state.isAuth ? <Navbar routes={routes} /> : <Navbar routes={routes} />}
      </div>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>} />
        {/* {routes.map(
          ({ path, element }, key) =>
            element && (
              <Route
                key={key}
                exact
                path={path}
                element={<PrivateRoute>{element}</PrivateRoute>}
              />
            )
        )} */}
        <Route
          path="/home"
          element={
           // <PrivateRoute isAuth={state.isAuth}>
              <Home />
           // </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            //<PrivateRoute isAuth={state.isAuth}>
              <Profile />
           // </PrivateRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
           // <PrivateRoute isAuth={state.isAuth}>
              <SignUp />
           // </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            //<PrivateRoute isAuth={state.isAuth}>
              <Settings />
            //</PrivateRoute>
          }
        />
        {/* <Route path={path} element={<PrivateRoute>{element}</PrivateRoute>} /> */}
        <Route
          path="/logout"
          element={
            //<PrivateRoute isAuth={state.isAuth}>
              <Logout />
            //</PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute isAuth={state.isAuth}>
              <Navigate to="/home" replace />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
