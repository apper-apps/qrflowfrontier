import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const About = () => {
  const { t } = useLanguage();

  const features = t("featuresList");
  const usageSteps = t("usageSteps");
  const languages = t("languages");

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
          {t("aboutTitle")}
        </h1>
        <p className="text-white/70 max-w-3xl mx-auto text-lg">
          {t("aboutDescription")}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Star" size={24} className="text-primary-400" />
                <h2 className="text-2xl font-display font-bold text-white">
                  {t("features")}
                </h2>
              </div>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-cyber-pink rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ApperIcon name="Check" size={14} className="text-white" />
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Usage Guide */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ApperIcon name="BookOpen" size={24} className="text-cyber-green" />
                <h2 className="text-2xl font-display font-bold text-white">
                  {t("usage")}
                </h2>
              </div>

              <ol className="space-y-4">
                {usageSteps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-cyber-green to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-white/90">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Languages & Support */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Globe" size={24} className="text-blue-400" />
                <h2 className="text-xl font-display font-bold text-white">
                  {t("supportedLanguages")}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5"
                  >
                    <ApperIcon name="Languages" size={16} className="text-blue-400" />
                    <span className="text-white/90">{language}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ApperIcon name="MessageCircle" size={24} className="text-cyber-pink" />
                <h2 className="text-xl font-display font-bold text-white">
                  Support
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-white/70">
                  Need help or have questions? Join our support community for assistance and updates.
                </p>

                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => window.open("https://discord.gg/support", "_blank")}
                >
                  <ApperIcon name="MessageSquare" size={16} className="mr-2" />
                  {t("joinSupport")}
                </Button>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <p className="text-white/50 text-sm">
                  {t("version")} 1.0.0
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;