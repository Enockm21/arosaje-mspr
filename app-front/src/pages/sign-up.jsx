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
            <Input variant="standard" label="Prénom" size="lg" />
            <Input variant="standard" label="Nom" size="lg" />
            <Input variant="standard" type="email" label="Mail" size="lg" />
            <Input
              variant="standard"
              type="password"
              label="Mot de passe"
              size="lg"
            />
            <div className="-ml-2.5">
              <Checkbox label="Je suis d'accord avec les conditions d'utilisation" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color="green" fullWidth>
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
