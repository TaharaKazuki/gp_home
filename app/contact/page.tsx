'use client';

import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-x-hidden"
    >
      contact page
    </motion.section>
  );
};

export default ContactPage;
