import { useState } from "react";
import { Link } from "react-router-dom";
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

export function SignUp() {
  const [DataAuthentification, setDataAuthentification] = useState({
    firstname: "",
    lastname: "",
    pseudo: "",
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8081/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DataAuthentification),
    })
      .then((response) => {
      })
      .catch((error => {
        alert("Error: ", error);
      }))
  }

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setDataAuthentification((DataAuthentification) => ({ ...DataAuthentification, [name]: value }));
  }

  return (
    <>
      <img
        src=""
        className="absolute inset-0 z-0 h-full w-full object-cover" alt="test"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Création du compte
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              variant="standard"
              label="Prénom"
              name="firstname"
              size="lg"
              value={DataAuthentification.firstname}
              onChange={handleDataChange} />
            <Input
              variant="standard"
              label="Nom"
              name="lastname"
              size="lg"
              value={DataAuthentification.lastname}
              onChange={handleDataChange} />
            <Input
              variant="standard"
              label="Pseudo"
              name="pseudo"
              size="lg"
              value={DataAuthentification.pseudo}
              onChange={handleDataChange} />
            <Input
              variant="standard"
              type="email"
              label="Mail"
              name="email"
              size="lg"
              value={DataAuthentification.email}
              onChange={handleDataChange} />
            <Input
              variant="standard"
              type="password"
              label="Mot de passe"
              name="password"
              size="lg"
              value={DataAuthentification.password}
              onChange={handleDataChange} />
            <div className="-ml-2.5">
              <Checkbox label="Je suis d'accord avec les conditions d'utilisation" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color="green" fullWidth onClick={handleSubmit}>
              Créer un compte
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Vous avez déjà un compte?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="green"
                  className="ml-1 font-bold"
                >
                  Se connecter
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
