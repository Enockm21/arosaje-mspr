import React from "react";
import axios from "axios";
import ApiService from "../service/Apiservice";
import ImgCard from "../img/teamwork.jpeg";
import { store } from "../reducer/store";
import { Navigate } from "react-router-dom";


import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

export function Home() {
  const { dispatch, state } = React.useContext(store);
  const [loader, setLoader] = React.useState(false);
  const [plantesList, setPlantesList] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  //
  const getPlantes = () => {
    ApiService.request({}, "plantes", "get")
      .then((res) => {
        setLoader(false);
        //dispatch({ type: "SET_USER", payload: response.data });
        console.log(res, "res");
        // localStorage.setItem("user", JSON.stringify(response.data.name));
        //  localStorage.setItem("user_role", response.data.role);
        const response = res;

        dispatch({ type: "SET_PLANTLIST", payload: response });
      })
      .catch(function () {
        // manque un message quand c'est une error
        setLoader(false);
        setErrorMessage(
          "Impossible de se connecter, vérifier votre mot de passe ou votre adresse email."
        );
      });
  };
  React.useEffect(() => {
    getPlantes();
  }, []);

  return (
    <>
      {!state.isAuth ? (
      <>
      {console.log("coucou")}
      <Navigate to="/sign-in" replace />
    </>
      ) : (
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {state.plantesList.map((plante, key) => (
            <Card
              key={key}
              className="w-[15rem] lg:w-[20rem] overflow-hidden border-green-500 border-2 m-4"
            >
              <CardHeader
                color="transparent"
                className="m-0 rounded-none md:max-h-[20rem] max-h-[15rem] min-h-[8rem]"
              >
                <img src={ImgCard} alt="" className="w-full h-full" />
              </CardHeader>
              <CardBody>
                <Typography variant="lead" color="black">
                  {plante.name}
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3 text-sm max-h-[5rem] overflow-hidden text-ellipsis"
                >
                  {plante.description}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                  <Tooltip content={""}>
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt={""}
                      src={""}
                      className=""
                    />
                  </Tooltip>
                </div>
                <Typography className="font-normal">Ville</Typography>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
