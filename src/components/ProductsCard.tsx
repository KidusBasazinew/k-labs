interface Props {
  image: string;
  websiteUrl: string;
  price: number;
}

const ProductsCard = ({ image, websiteUrl, price }: Props) => {
  return (
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
          <p className="mt-1 font-medium text-sm text-gray-900">{price}</p>
        </h3>
      </div>
    </a>
  );
};

export default ProductsCard;
