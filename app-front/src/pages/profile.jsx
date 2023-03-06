import { 
  Avatar, 
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import ImgCard from '../img/teamwork.jpeg'
import { MapPinIcon } from "@heroicons/react/24/solid";
import ImgAvatar from '../img/avatar.jpg';

export function Profile() {

  const user = {
    first_name: "Paul",
    last_name: "Bardou",
    pseudo: "Polo31",
    adresse: "31500 Toulouse",
    nb_plantes: 6,
    nb_plantes_gardées: 3,
    nb_planques_que_vous_gardez: 1,
    plantes: [
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
    ],
    plantes_kept: [
      {
        id: 1,
        img: "",
        nom: "plante 1",
        description: "Lorem ipsum dolor sit amet. Et unde sint cum aspernatur unde qui ullam sint aut reiciendis dignissimos qui velit beatae et optio quia aut dolorum quasi. Aut nobis repudiandae cum debitis incidunt non incidunt autem vel iste perferendis. Ut blanditiis quisquam aut nisi accusantium aut iste modi et voluptas internos eum quasi ipsum. Eum alias laudantium et molestiae quod et nisi quam ut quae repellendus et tempore incidunt eum pariatur molestiae qui nulla eveniet! ",
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
    ],
    plantes_you_kept: [
      {
        id: 1,
        img: "",
        nom: "plante 1",
        description: "Lorem ipsum dolor sit amet. Et unde sint cum aspernatur unde qui ullam sint aut reiciendis dignissimos qui velit beatae et optio quia aut dolorum quasi. Aut nobis repudiandae cum debitis incidunt non incidunt autem vel iste perferendis. Ut blanditiis quisquam aut nisi accusantium aut iste modi et voluptas internos eum quasi ipsum. Eum alias laudantium et molestiae quod et nisi quam ut quae repellendus et tempore incidunt eum pariatur molestiae qui nulla eveniet! ",
        user: "user 1",
        ville: "toulouse"
      },
    ]
  }

  function handleClickScroll(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="w-full px-4 lg:order-3 lg:w-4/12">
          <div className="flex justify-center py-4 pt-8 lg:pt-4">
            <div className="mr-4 p-3 text-center">
              <Typography
                variant="lead"
                color="blue-gray"
                className="font-bold uppercase"
              >
                {user.nb_plantes}
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                Plante(s)
              </Typography>
            </div>
            <div className="mr-4 p-3 text-center">
              <Typography
                variant="lead"
                color="blue-gray"
                className="font-bold uppercase"
              >
                {user.nb_planques_que_vous_gardez}
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                Plante(s) que vous gardée(s)
              </Typography>
            </div>
            <div className="p-3 text-center lg:mr-4">
              <Typography
                variant="lead"
                color="blue-gray"
                className="font-bold uppercase"
              >
                {user.nb_plantes_gardées}
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                Plante(s) gardée(s)
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full justify-center lg:order-0 lg:mt-0 lg:w-2/12 lg:justify-end lg:self-center">
          <Avatar src={ImgAvatar} alt="avatar" size="xxl" />
        </div>
      </div>
      <div className="my-8 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          {user.first_name + " " + user.last_name}
        </Typography>
        <div className="mb-16 flex items-center justify-center gap-2">
          <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
          <Typography className="font-medium text-blue-gray-700">
            {user.adresse}
          </Typography>
        </div>
      </div>
      <div>
        <Typography id="vos_plantes" className="font-bold text-xl sm:text-2xl text-white text-center bg-green-500 p-4">
          Vos plantes
        </Typography>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {user.plantes.map((plante) => (
            <Card className="w-[15rem] lg:w-[20rem] overflow-hidden border-green-500 border-2 mb-10 mt-10">
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
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <Typography id="plantes_gardees" className="font-bold text-xl sm:text-2xl text-white text-center bg-green-500 p-4">
          Plantes qui sont gardées
        </Typography>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {user.plantes_kept.map((plante) => (
            <Card className="w-[15rem] lg:w-[20rem] overflow-hidden border-green-500 border-2 mb-10 mt-10">
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
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                <Typography className="font-normal">Gardé par </Typography>
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <Typography id="plantes_que_vous_gardez" className="font-bold text-xl sm:text-2xl text-white text-center bg-green-500 p-4">
          Plantes que vous gardez
        </Typography>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {user.plantes_you_kept.map((plante) => (
            <Card className="w-[15rem] lg:w-[20rem] overflow-hidden border-green-500 border-2 mb-10 mt-10">
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
      </div>
    </>
  );
}

export default Profile;
