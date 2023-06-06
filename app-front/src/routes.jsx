import { Profile } from "./pages/profile";
import { SignUp} from './pages/sign-up'
import { Home} from './pages/home'
import { NewPlante} from './pages/newPlante'
import Logout from './pages/logout'
import  Settings from './pages/settings'



import {
  HomeIcon,
  PlusCircleIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "accueil",
    path: "/home",
    element: <Home />,
  },
  {
    icon: PlusCircleIcon,
    name: "ajouter une plante",
    path: "/plante/new",
    element: <NewPlante />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  
  {
    icon: UserPlusIcon,
    name: "Créer un compte",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: Cog6ToothIcon,
    name: "paramètres",
    path: "/settings",
    element: <Settings />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "se deconnecter",
    path: "/logout",
    element: <Logout />,
  },
];

export default routes;
