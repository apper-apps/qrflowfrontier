import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import ThemeToggle from "@/components/molecules/ThemeToggle";
import LanguageSelector from "@/components/molecules/LanguageSelector";
import ApperIcon from "@/components/ApperIcon";

const Header = ({ onMenuToggle }) => {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect border-b border-white/10 backdrop-blur-20 sticky top-0 z-40"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg glass-effect border border-white/20 hover:border-white/30 text-white transition-all duration-200"
            >
              <ApperIcon name="Menu" size={20} />
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-cyber-pink rounded-lg flex items-center justify-center">
                <ApperIcon name="QrCode" size={20} className="text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                {t("appName")}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;