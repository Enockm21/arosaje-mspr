import { Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "../widgets/layout/footer";

export function Profile() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
          <Button className="bg-blue-400">Conntect</Button>
        </div>
        <div className="w-full px-4 lg:order-1 lg:w-4/12">
          <div className="flex justify-center py-4 pt-8 lg:pt-4">
            <div className="mr-4 p-3 text-center">
              <Typography
                variant="lead"
                color="blue-gray"
                className="font-bold uppercase"
              >
                22
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                Friends
              </Typography>
            </div>
            <div className="mr-4 p-3 text-center">
              <Typography
                variant="lead"
                color="blue-gray"
                className="font-bold uppercase"
              >
                10
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                Photos
              </Typography>
            </div>
            <div className="p-3 text-center lg:mr-4">
              <Typography
                variant="lead"
                color="blue-gray"
                className="font-bold uppercase"
              >
                89
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                Comments
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Jenna Stones
        </Typography>
        <div className="mb-16 flex items-center justify-center gap-2">
          <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
          <Typography className="font-medium text-blue-gray-700">
            Los Angeles, California
          </Typography>
        </div>
        <div className="mb-2 flex items-center justify-center gap-2">
          <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
          <Typography className="font-medium text-blue-gray-700">
            Solution Manager - Creative Tim Officer
          </Typography>
        </div>
        <div className="mb-2 flex items-center justify-center gap-2">
          <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
          <Typography className="font-medium text-blue-gray-700">
            University of Computer Science
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Profile;
