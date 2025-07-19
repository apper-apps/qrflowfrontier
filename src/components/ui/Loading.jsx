import React from "react";
import { motion } from "framer-motion";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-primary-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <motion.p
        className="text-white/70 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </motion.p>
    </div>
  );
};

export default Loading;