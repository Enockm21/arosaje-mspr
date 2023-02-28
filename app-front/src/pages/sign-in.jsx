import React from "react";
import { Link } from "react-router-dom";
import ApiService from "../service/Apiservice";
import { Navigate, useLocation } from "react-router-dom";
import { store } from "../reducer/Store";

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
import { SimpleFooter } from "../widgets/layout/simple-footer";

export function SignIn() {
    const { dispatch, state } = React.useContext(store);
  const location = useLocation();
  const fromLastLocation = location.state && location.state.from.pathname;
  const [username, setUsername] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [passwordShow, setPasswordShow] = React.useState(false);
  const handlePasswordShow = () => setPasswordShow(!passwordShow);
  console.log(pwd, username, "res");
  const connect = (e) => {
    e.preventDefault();
    setLoader(true);

    ApiService.request({ username: username, password: pwd }, "login", "post")
      .then(function (response) {
        setLoader(false);
        //dispatch({ type: "SET_USER", payload: response.data });
        console.log(response, "res");
        localStorage.setItem("arosaje-token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.name));
        localStorage.setItem("user_role", response.data.role);

        // if (response.data.brand_users) {
        //   localStorage.setItem(
        //     "brands",
        //     JSON.stringify(response.data.brand_users)
        //   );
        // }
        //    dispatch({ type: "SET_AUTH", payload: true });
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
          
          <Navigate to="/home" replace />
        
      ) :
      (<><div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
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
              <Button variant="gradient" type="submit" fullWidth color="green">
                Se connecter
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
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
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div> </>)
    }
      
    </>
  );
}

export default SignIn;
