import { Profile } from "./pages/profile";
import { SignUp} from './pages/sign-up'
import { SignIn} from './pages/sign-in'
import { Home} from './pages/home'
import { NewPlante} from './pages/newPlante'
import Logout from './pages/logout'
import  Message from './pages/message'
import  Settings from './pages/settings'



import {
  HomeIcon,
  PlusCircleIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  Cog6ToothIcon,
  ChatBubbleBottomCenterIcon,
  
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
    icon:ChatBubbleBottomCenterIcon,
    name: "message",
    path: "/message",
    element: <Message />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "se connecter",
    path: "/sign-in",
    element: <SignIn />,
  },
  /* {
    icon: UserPlusIcon,
    name: "Créer un compte",
    path: "/sign-up",
    element: <SignUp />,
  }, */

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
