import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="w-full py-4 bg-gray-200 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300 text-sm select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.00, color: '#2563eb' }}
    >
      <p>© {new Date().getFullYear()} Rabflix. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
