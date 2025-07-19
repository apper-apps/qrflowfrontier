import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: "Information We Collect",
      content: "QRFlow Pro is designed with privacy in mind. We do not collect personal information unless you voluntarily provide it. The app processes QR code data locally on your device."
    },
    {
      title: "How We Use Information",
      content: "Any QR codes you generate or scan are processed locally on your device. We do not store or transmit your QR code content to external servers."
    },
    {
      title: "Data Storage",
      content: "Your preferences (theme, language) are stored locally in your browser. No personal data is transmitted to our servers."
    },
    {
      title: "Third-Party Services",
      content: "QRFlow Pro does not integrate with third-party analytics or tracking services that would collect your personal information."
    },
    {
      title: "Security",
      content: "We implement security measures to protect against unauthorized access to your data. All processing happens locally on your device."
    },
    {
      title: "Changes to Privacy Policy",
      content: "We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date."
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
          {t("privacyPolicy")}
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains how we handle your information.
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
              <ApperIcon name="Shield" size={24} className="text-primary-400" />
              <h2 className="text-2xl font-display font-bold text-white">
                Privacy Policy
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
                      <span className="w-6 h-6 bg-gradient-to-br from-primary-500 to-cyber-pink rounded-full flex items-center justify-center text-xs font-bold">
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
                className="mt-12 p-6 bg-gradient-to-r from-primary-500/10 to-cyber-pink/10 rounded-xl border border-primary-500/20"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                <p className="text-white/80">
                  If you have any questions about this Privacy Policy, please contact us through our support channels.
                </p>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;