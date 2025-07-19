import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import ApperIcon from "@/components/ApperIcon";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-lg glass-effect border border-white/20 hover:border-white/30 text-white transition-all duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        <ApperIcon 
          name={theme === "dark" ? "Moon" : "Sun"} 
          size={20} 
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;