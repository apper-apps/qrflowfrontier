import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import ApperIcon from "@/components/ApperIcon";

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", icon: "Globe", flag: "🇺🇸" },
    { code: "ar", name: "العربية", icon: "Globe", flag: "🇸🇦" },
    { code: "ja", name: "日本語", icon: "Globe", flag: "🇯🇵" },
    { code: "zh", name: "中文", icon: "Globe", flag: "🇨🇳" },
    { code: "ko", name: "한국어", icon: "Globe", flag: "🇰🇷" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg glass-effect border border-white/20 hover:border-white/30 text-white transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <ApperIcon name="ChevronDown" size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 w-48 glass-effect border border-white/20 rounded-xl overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                  language === lang.code ? "bg-primary-500/20 text-primary-300" : "text-white"
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;