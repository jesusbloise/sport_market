import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router";
import products from "../data/products"; // Import products data

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext); // Add to cart from context

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6 flex flex-col md:flex-row items-center">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="object-cover w-80 h-80 rounded-lg shadow-md"
          />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col items-start mt-4 md:mt-0 md:ml-6">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl font-bold mb-4">
            {product.price} <span className="text-sm font-light">clp</span>
          </p>
          <p className="mb-4">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="cursor-pointer border-1 border-black bg-blue-400 rounded-sm px-4 py-2 w-full text-center hover:bg-blue-600"
          >
            Agregar al carro
          </button>
        </div>
      </div>
    </div>
  );
}
