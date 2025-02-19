import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-red-600"
      >
        404
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl text-gray-700 mt-4"
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-6"
      >
        <Link to="/">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-lg hover:bg-blue-700 transition">
            Go Back Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
