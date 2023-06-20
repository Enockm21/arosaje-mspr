import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import ImgCard from "../img/plante.jpeg";

export function Plante() {
  const { id } = useParams();
  const plante = {
    nom: "Corydalis bulbeux",
    user_name: "Paulo",
    ville: "Toulouse",
    description:
      "Lrem ipsum dolor sit amet. Et unde sint cum aspernatur unde qui ullam sint aut reiciendis dignissimos qui velit beatae et optio quia aut dolorum quasi. Aut nobis repudiandae cum debitis incidunt non incidunt autem vel iste perferendis. Ut blanditiis quisquam aut nisi accusantium aut iste modi et voluptas internos eum quasi ipsum. Eum alias laudantium et molestiae quod et nisi quam ut quae repellendus et tempore incidunt eum pariatur molestiae qui nulla eveniet!",
  };

  const [isCommentVisible, setIsCommentVisible] = useState(false);

  const toggleCommentVisibility = () => {
    setIsCommentVisible(!isCommentVisible);
  };

  return (
    <div className="flex flex-wrap justify-center lg:justify-start m-5">
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Card className="w-[20rem] overflow-hidden">
          <CardHeader color="transparent" className="m-0 max-h-[20rem]">
            <img src={ImgCard} alt="" className="w-full h-full" />
          </CardHeader>
          <CardBody className="p-3">
            <Typography variant="lead" color="black">
              {plante.nom} de {plante.user_name}
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between p-3">
            <div className="flex items-center -space-x-3">
              <Tooltip content={plante.user_name}>
                <Avatar
                  size="sm"
                  variant="circular"
                  alt={plante.user_name}
                  src={ImgCard}
                  className=""
                />
              </Tooltip>
            </div>
            <Typography className="font-normal">{plante.ville}</Typography>
          </CardFooter>
        </Card>
      </div>
      {/* Description */}
      <div className="w-full lg:w-1/2 lg:h-full px-10 lg:pr-20 lg:pl-0 text-clip overflow-hidden mt-10 lg:mt-0 text-center lg:text-start">
        <Typography className="font-bold mb-4">Description:</Typography>
        <Typography className="font-normal">{plante.description}</Typography>
        {isCommentVisible && (
          <textarea
            className="border border-gray-300 rounded p-2 mt-4"
            placeholder="Tapez votre commentaire..."
          />
        )}
        <Button
          className="m-10"
          color="green"
          onClick={toggleCommentVisibility}
        >
          {isCommentVisible ? "Fermer" : "Ajouter un conseil"}
        </Button>
      </div>
      {/* Bouton */}
      <div className="w-full lg:w-1/2 text-center">
        <Button className="m-10" color="green">
          Envoyer un message
        </Button>
      </div>
    </div>
  );
}

export default Plante;
