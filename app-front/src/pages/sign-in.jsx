import React from "react";
import { Link } from "react-router-dom";
import ApiService from "../service/Apiservice";
import { Navigate, useLocation } from "react-router-dom";
import { store } from "../reducer/store";
import jwt_decode from "jwt-decode";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignIn() {
  const { dispatch, state } = React.useContext(store);
  const location = useLocation();
  const fromLastLocation = location.state && location.state.from.pathname;
  const [username, setUsername] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  console.log(pwd, username, "res");
  console.log(state.isAuth, "state.isAuth");
  var decoded = jwt_decode("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODU1MTkxMzQsImV4cCI6MTY4NTUyMjczNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZXJpY2Q3NTU5QGdtYWlsLmNvbSJ9.seYjmEnH7fyUWWnFDM4Yg4xsbaX8U19JbOBV9zcvwb11rqTzIJWBALEu-pDcBAGXm0K8ec_C_GcAGA5ZinQ7Qn7xBz_4KsoVfhNP4uB8PuWXwd0hb_vEC9C7bN8En1K3MJGnzLZUj4XpjrR4Gqss0ZaKNZZwt1k1HzcAN4Ly2qLSKNyHUPGVRvWtjBQOlOyayYb1JEQEa5MmvNvJln0lBaiNAHGsnkKv1aEGzDYlYf16Guu233Zax7ZIsvKtsJ7xAt1sLsOH2q0Ygto83PF9w9E54rxLTbPll60lArcb3zcU-2h4GB-jkKUl16qp_nDAiEEnxEHCpYrzSz3HylWx7A");
  console.log(decoded, "decoded.decoded");

  const connect = (e) => {
    e.preventDefault();
    setLoader(true);

    ApiService.request({ username: username, password: pwd }, "login", "post")
      .then(function (response) {
        setLoader(false);
        //dispatch({ type: "SET_USER", payload: response.data });
        console.log(response, "res");
        localStorage.setItem("arosaje-token", response.token);
        // localStorage.setItem("user", JSON.stringify(response.data.name));
        //  localStorage.setItem("user_role", response.data.role);

        // if (response.data.brand_users) {
        //   localStorage.setItem(
        //     "brands",
        //     JSON.stringify(response.data.brand_users)
        //   );
        // }
        dispatch({ type: "SET_AUTH", payload: true });
      })
      .catch(function () {
        // manque un message quand c'est une error
        setLoader(false);
        setErrorMessage(
          "Impossible de se connecter, vérifier votre mot de passe ou votre adresse email."
        );
      });
  };


  return (
    <>
      {state.isAuth ? (
        <>
          {console.log("coucou")}
          <Navigate to="/home" replace />
        </>
      ) : (
        <>
          <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
          <div className="container mx-auto p-4">
            <form onSubmit={(e) => connect(e)}>
              <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                <CardHeader
                  variant="gradient"
                  color="green"
                  className="mb-4 grid h-28 place-items-center"
                >
                  <Typography variant="h3" color="white">
                    Se connecter
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <Input
                    variant="standard"
                    type="email"
                    label="Mail"
                    size="lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <Input
                    variant="standard"
                    type="password"
                    label="Mot de passe"
                    size="lg"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                  <div className="-ml-2.5">
                    <Checkbox label="Se souvenir de moi" />
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    variant="gradient"
                    type="submit"
                    fullWidth
                    color="green"
                  >
                    Se connecter
                  </Button>
                  <Typography
                    variant="small"
                    className="mt-6 flex justify-center"
                  >
                    Vous n'avez pas de compte?
                    <Link to="/sign-up">
                      <Typography
                        as="span"
                        variant="small"
                        color="green"
                        className="ml-1 font-bold"
                      >
                        Rejoignez-nous!
                      </Typography>
                    </Link>
                  </Typography>
                </CardFooter>
              </Card>
            </form>
          </div>
          
        </>
      )}
    </>
  );
}

export default SignIn;
