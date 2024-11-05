import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, error: cartError } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-600 text-center font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group border border-gray-200 rounded-xl shadow-lg p-4 hover:shadow-2xl transition-transform transform hover:-translate-y-2 bg-white">
            <Link to={`/product/${product.id}`} className="block">
              <div className="aspect-square overflow-hidden rounded-t-lg mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{product.title}</h3>
              <p className="text-lg font-bold text-blue-500">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
            </Link>
            {user && (
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
      {cartError && (
        <div className="fixed bottom-4 right-4 bg-red-200 border border-red-400 text-red-800 px-4 py-3 rounded-lg shadow-lg">
          {cartError}
        </div>
      )}
    </div>
  );
};

export default ProductList;
