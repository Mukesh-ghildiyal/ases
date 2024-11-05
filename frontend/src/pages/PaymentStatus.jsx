import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

const PaymentStatus = () => {
  const location = useLocation();
  const success = location.state?.success;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center transition-transform hover:scale-105 duration-300">
        {success ? (
          <>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Payment Successful!</h2>
            <p className="mb-6 text-gray-600">Thank you for your purchase. Your transaction was completed successfully.</p>
          </>
        ) : (
          <>
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Payment Failed</h2>
            <p className="mb-6 text-gray-600">Something went wrong with your transaction. Please try again or contact support.</p>
          </>
        )}
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-700 transform transition-transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentStatus;
