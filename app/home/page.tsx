import { ProductCard } from "@/components";
import { products } from "@/constants";
const Hero = () => {
  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          imageSrc={product.imageSrc}
          price={product.price}
          id={product.id.toString()}
        />
      ))}
    </div>
  );
};

export default Hero;