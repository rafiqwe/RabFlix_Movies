import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="absolute left-0  w-full flex flex-col items-center justify-center min-h-screen gap-10 text-white px-6 overflow-hidden "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full left-0 top-0">
        <img
          src="/banner.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>  
      </div>

      {/* Main Content */}
      <motion.h1
        className="text-5xl z-10 font-extrabold text-center tracking-wide"
        animate={{
          scale: [1, 1.05, 1],
          textShadow: [
            '0 0 0 rgba(0,0,0,0)',
            '0 0 8px rgba(255,255,255,0.6)',
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

      <div className="flex gap-8 z-10">
        <motion.button
          onClick={() => navigate('/movies')}
          className="bg-blue-600 cursor-pointer text-white py-4 px-10 rounded-3xl text-2xl font-semibold shadow-lg"
          whileHover={{
            scale: 1.1,
            backgroundColor: '#2563eb',
            boxShadow: '0 8px 20px rgba(37,99,235,0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Browse Movies
        </motion.button>

        <motion.button
          className="bg-pink-600 cursor-pointer text-white py-4 px-10 rounded-3xl text-2xl font-semibold shadow-lg"
          onClick={() => navigate('/anime')}
          whileHover={{
            scale: 1.1,
            backgroundColor: '#db2777',
            boxShadow: '0 8px 20px rgba(219,39,119,0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Browse Anime
        </motion.button>
      </div>
    </motion.div>
  );
}
