import { Link } from "react-router-dom";

interface Props {
  heading: string;
  description: string;
  icon: string;
}

const ServicesCard = ({ heading, description, icon }: Props) => {
  return (
    <Link
      to="../getstart"
      className="h-full w-full cursor-pointer  rounded-lg  group/main visible animate-in fade-in-5 hover:bg-muted"
    >
      <div className="flex flex-col p-5 gap-y-2w-full ">
        <div className="w-20 group relative overflow-hidden rounded-xl float-left">
          <img src={icon} alt="" />
        </div>
        <h3 className="mt-4 font-bold text-sm text-accent-foreground float-right">
          {heading}
        </h3>
        <p className="mt-2 font-medium text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ServicesCard;
