import Button from "@/components/Button";
import { Star } from "lucide-react";

function ProductsPage() {

  const products = [
    {
      _id: "60f7c2f7e1b1a4a1f8a1b1a1",
      name: "Apple iPhone 14 Pro",
      category: "Smartphones",
      price: 999.99,
      inStock: true,
      rating: 4.8,
      image:
        "http://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F41187%2FiPhone-14-pro-max-Price-in-bangladesh-Gold.jpg&w=1080&q=75",
    },
    {
      _id: "60f7c2f7e1b1a4a1f8a1b1a2",
      name: "Samsung Galaxy S23",
      category: "Smartphones",
      price: 849.99,
      inStock: true,
      rating: 4.6,
      image:
        "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F39091%2FSamsung-S23-Ultra-Official-Price-in-Bangladesh-Cream.jpg&w=1080&q=75",
    },
    {
      _id: "60f7c2f7e1b1a4a1f8a1b1a3",
      name: "Sony WH-1000XM5 Headphones",
      category: "Audio",
      price: 379.99,
      inStock: false,
      rating: 4.9,
      image:
        "http://adminapi.applegadgetsbd.com/storage/media/large/5318-55349.jpg",
    },
    {
      _id: "60f7c2f7e1b1a4a1f8a1b1a4",
      name: "MacBook Air M2",
      category: "Laptops",
      price: 1199.99,
      inStock: true,
      rating: 4.7,
      image:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/m2-macbook-air-design-leak-1.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
    },
    {
      _id: "60f7c2f7e1b1a4a1f8a1b1a5",
      name: "Logitech MX Master 3S",
      category: "Accessories",
      price: 99.99,
      inStock: true,
      rating: 4.8,
      image: "https://vibegaming.com.bd/wp-content/uploads/2022/10/web-1.png",
    },
  ];
  
  return (
    <div>
      {products.map((product) => {
        return (
          <div
            key={product._id}
            className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-8"
          >
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl w-full h-[350px] object-contain border"
              />
            </div>

            <div className="flex flex-col justify-between w-full">
              <div>
                <h2 className="text-2xl font-bold text-[#1D3557] mb-2">
                  {product.name}
                </h2>
                <span className="inline-block bg-[#4CAF50] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {product.category}
                </span>
                <p className="text-gray-600 text-lg mb-6">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      fill={
                        index < Math.round(product.rating) ? "#FBBF24" : "none"
                      }
                      stroke="#FBBF24"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>
              </div>
                <Button/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsPage;
