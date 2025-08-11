import { Heading, Product } from "@/components/layout/Product";
import "./NewArrivals.scss";
import { Products } from "@/data";
import { Sliders, NextArrow, PrevArrow } from "@/components/layout";

export const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="new-arrivals">
      <Heading heading="New Arrivals" />
      <Sliders settings={settings} slideElements={
        Products
          .sort(() => Math.random() - 0.5)
          .slice(0, 5)
          .map((product) => (
            <div className="new-arrivals-slide">
              <Product
                _id={product._id}
                img={product.img}
                productName={product.productName}
                price={product.price}
                color={product.color}
                badge={product.badge}
                des={product.des}
              />
            </div>
        ))}
      />
    </div>
  );
};