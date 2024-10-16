interface Props {
  text: string;
}

const BlogText = ({ text }: Props) => {
  return <p className="ml-3 text-balance mt-4">{text}</p>;
};

export default BlogText;
