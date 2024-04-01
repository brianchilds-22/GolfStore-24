import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to the Golf Proshop",
  description: "E-commerce website for buying golf products and accessories",
  keywords:
    "golf, golf clubs, golf balls, golf shoes, golf apparels, e-commerce, buy, online",
};
export default Meta;
