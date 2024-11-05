import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-20 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="container mx-auto">
          <motion.h1
            className="text-5xl font-extrabold mb-6"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Shopy
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Discover amazing products at unbeatable prices and find what you love.
          </motion.p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/products"
              className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Our Store Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Our Store</h2>
          <p className="text-gray-600">
            Shopy is your one-stop destination for all your shopping needs. We offer a curated selection of high-quality products ranging from electronics and fashion to home essentials. Our goal is to bring you the best online shopping experience with unbeatable prices and excellent customer service.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/29/18/38/business-1012761_640.jpg"
            alt="About Our Store"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 mb-8">Read what our customers have to say about their experience with Shopy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['John', 'Emma', 'Alex'].map((name, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-800 mb-4">
                "Shopy exceeded my expectations! The quality of the products and the fast delivery made my shopping experience fantastic."
              </p>
              <p className="font-bold text-gray-700">- {name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-blue-500 text-white py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-8">Sign up to receive the latest deals, promotions, and updates from Shopy!</p>
        <motion.form
          className="flex flex-col md:flex-row justify-center gap-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg border-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all"
          >
            Subscribe
          </button>
        </motion.form>
      </motion.section>
    </div>
  );
};

export default Home;
