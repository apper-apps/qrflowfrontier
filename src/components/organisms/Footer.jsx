import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="glass-effect border-t border-white/10 backdrop-blur-20 px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2">
          <p className="text-white/70 text-sm">
            {t("copyright")}
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              to="/terms"
              className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              {t("termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;