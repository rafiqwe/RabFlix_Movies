import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen gap-10 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-5xl  font-extrabold text-center tracking-wide"
        animate={{
          scale: [1, 1.05, 1],
          textShadow: [
            '0 0 0 rgba(0,0,0,0)',
            '0 0 8px rgba(59,130,246,0.7)',
            '0 0 0 rgba(0,0,0,0)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >

        Welcome to <span className="text-red-500">RabFlix</span>
      </motion.h1>

      <div className="flex gap-8">
        <motion.NavLink
          to="/movies"
          className="bg-blue-600 cursor-pointer text-white py-4 px-10 rounded-3xl text-2xl font-semibold shadow-lg"
          whileHover={{ scale: 1.1, backgroundColor: '#2563eb', boxShadow: '0 8px 20px rgba(37,99,235,0.6)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Browse Movies
        </motion.NavLink>

        <motion.button
          className="bg-pink-600 cursor-pointer text-white py-4 px-10 rounded-3xl text-2xl font-semibold shadow-lg"
          onClick={() => navigate('/anime')}
          whileHover={{ scale: 1.1, backgroundColor: '#db2777', boxShadow: '0 8px 20px rgba(219,39,119,0.6)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Browse Anime
        </motion.button>
      </div>
    </motion.div>
  );
}
