import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const TermsOfService = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using QRFlow Pro, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily use QRFlow Pro for personal and commercial purposes. This license shall automatically terminate if you violate any of these restrictions."
    },
    {
      title: "Disclaimer",
      content: "The materials on QRFlow Pro are provided on an 'as is' basis. QRFlow Pro makes no warranties, expressed or implied, and hereby disclaims all other warranties including implied warranties of merchantability or fitness for a particular purpose."
    },
    {
      title: "Limitations",
      content: "In no event shall QRFlow Pro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on QRFlow Pro."
    },
    {
      title: "User Responsibilities",
      content: "You are responsible for the content you encode in QR codes. Do not use the service for illegal activities or to create QR codes containing harmful, offensive, or copyrighted content without permission."
    },
    {
      title: "Service Availability",
      content: "QRFlow Pro is provided as-is and we make no guarantees about service availability, uptime, or performance. The service may be interrupted for maintenance or updates."
    },
    {
      title: "Privacy and Data",
      content: "Your use of QRFlow Pro is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices."
    },
    {
      title: "Modifications",
      content: "QRFlow Pro may revise these terms of service at any time without notice. By using this web site you are agreeing to be bound by the then current version of these terms of service."
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
          {t("termsOfService")}
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Please read these terms carefully before using QRFlow Pro.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <ApperIcon name="FileText" size={24} className="text-primary-400" />
              <h2 className="text-2xl font-display font-bold text-white">
                Terms of Service
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-cyber-green to-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span>{section.title}</span>
                    </h3>
                    <p className="text-white/80 leading-relaxed pl-8">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12 p-6 bg-gradient-to-r from-cyber-green/10 to-blue-500/10 rounded-xl border border-cyber-green/20"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Agreement</h3>
                <p className="text-white/80">
                  By using QRFlow Pro, you acknowledge that you have read and understood these terms and agree to be bound by them.
                </p>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default TermsOfService;