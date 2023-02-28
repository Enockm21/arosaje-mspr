import React from "react";
import axios from "axios"
import ApiService from "../service/Apiservice";
import ImgCard from '../img/teamwork.jpeg'
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
  React.useEffect(()=>{
    axios.post('http://localhost:8081/api/login', {
      username: 'ericd7559@gmail.com',
      password: '12345678'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  },[])

  const plantes = [
    {
      id: 1,
      img: "",
      nom: "plante 1",
      description: "Lorem ipsum dolor sit amet. Et unde sint cum aspernatur unde qui ullam sint aut reiciendis dignissimos qui velit beatae et optio quia aut dolorum quasi. Aut nobis repudiandae cum debitis incidunt non incidunt autem vel iste perferendis. Ut blanditiis quisquam aut nisi accusantium aut iste modi et voluptas internos eum quasi ipsum. Eum alias laudantium et molestiae quod et nisi quam ut quae repellendus et tempore incidunt eum pariatur molestiae qui nulla eveniet! ",
      user: "user 1",
      ville: "toulouse"
    },
    {
      id: 2,
      img: "",
      nom: "plante 2",
      description: "ioroifjriofj roifjri roifjiofjr ofijr",
      user: "user 2",
      ville: "toulouse"
    },
    {
      id: 3,
      img: "",
      nom: "plante 3",
      description: "ioroifjriofj roifjri roifjiofjr ofireizr rfijziojfzij foizfjzoijjr",
      user: "user 1",
      ville: "toulouse"
    },
    {
      id: 4,
      img: "",
      nom: "plante 4",
      description: "ioroifjriofj roifjri roifjiofjr ofijr",
      user: "user 1",
      ville: "toulouse"
    }
  ]

  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between">
        {plantes.map((plante) => (
          <Card className="w-[15rem] md:w-[20rem] overflow-hidden border-green-500 border-2 m-4">
            <CardHeader
              color="transparent"
              className="m-0 rounded-none md:max-h-[20rem] max-h-[15rem] min-h-[8rem]"
            >
              <img
                src={ImgCard}
                alt=""
                className="w-full h-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="lead" color="black">
                {plante.nom}
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3 text-sm max-h-[5rem] overflow-hidden text-ellipsis">
                {plante.description}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                <Tooltip content={plante.user}>
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt={plante.user}
                    src={plante.img}
                    className=""
                  />
                </Tooltip>
              </div>
              <Typography className="font-normal">Ville</Typography>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;
