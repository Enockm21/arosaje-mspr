import { Profile } from "./pages/profile";
import { SignIn} from './pages/sign-in'
import { SignUp} from './pages/sign-up'
import { Home} from './pages/home'
import  Settings from './pages/settings'


import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "acceuil",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "se connecter",
    path: "/sign-in",
    element: <SignIn />,
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
];

export default routes;
