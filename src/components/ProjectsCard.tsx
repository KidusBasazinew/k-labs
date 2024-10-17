import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

import { CalendarDays } from "lucide-react";
import { FileCode2 } from "lucide-react";

interface Props {
  image: string;
  websiteUrl: string;
  price: number;
  description: string;
  dateDeliverd: string;
}
const ProjectsCard = ({
  image,
  websiteUrl,
  price,
  description,
  dateDeliverd,
}: Props) => {
  return (
    <div>
      {image.length > 0 ? (
        <HoverCard>
          <HoverCardTrigger>
            <a
              href=""
              className="h-full w-full cursor-pointer group/main visible animate-in fade-in-5"
            >
              <div className="flex flex-col w-full">
                <div className="group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl">
                  <img src={image} alt="" />
                </div>
                <h3 className="mt-4 font-medium text-sm text-gray-700">
                  <p className="mt-1 text-sm text-gray-500">{websiteUrl}</p>
                  <p className="mt-1 font-medium text-sm text-gray-900">
                    {price}
                  </p>
                </h3>
              </div>
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="z-50 absolute bottom-20 left-0 right-10 rotate-0">
            <div className="flex justify-between space-x-4">
              <FileCode2 className="ml-3 h-10 w-10 " />
              <div className="space-y-1">
                <a
                  className="text-sm font-semibold"
                  href={"https://" + websiteUrl}
                >
                  @{websiteUrl}
                </a>
                <p className="text-sm">{description}</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    {dateDeliverd}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <li>No list Found</li>
      )}
    </div>
  );
};

export default ProjectsCard;
