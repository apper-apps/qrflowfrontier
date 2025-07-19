import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import ApperIcon from "@/components/ApperIcon";

const Sidebar = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();

  const navigationItems = [
    { path: "/", label: t("home"), icon: "Home" },
    { path: "/create", label: t("createQR"), icon: "QrCode" },
    { path: "/scan", label: t("scanQR"), icon: "ScanLine" },
    { path: "/about", label: t("about"), icon: "Info" }
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-cyber-pink rounded-xl flex items-center justify-center">
            <ApperIcon name="QrCode" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-white">
              {t("appName")}
            </h1>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-primary-500/20 to-cyber-pink/20 text-primary-300 border border-primary-500/30"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                <ApperIcon name={item.icon} size={20} />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="text-center">
          <p className="text-xs text-white/50">
            {t("version")} 1.0.0
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 glass-effect border-r border-white/10 backdrop-blur-20">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={onClose}
            />
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 256 : -256 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 256 : -256 }}
              className={`lg:hidden fixed top-0 ${isRTL ? "right-0" : "left-0"} h-full w-64 glass-effect border-r border-white/10 backdrop-blur-20 z-50`}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-lg font-semibold text-white">{t("appName")}</span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                >
                  <ApperIcon name="X" size={20} />
                </button>
              </div>
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;