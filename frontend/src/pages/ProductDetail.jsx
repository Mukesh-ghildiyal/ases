import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error('Product not found');
      }
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-gray-600"></div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-600 text-center">{error || 'Product not found'}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-white p-6 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain hover:scale-105 transform transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.title}</h1>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
            <span className="ml-4 px-3 py-1 bg-gray-200 rounded-full text-sm capitalize shadow-sm">
              {product.category}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
