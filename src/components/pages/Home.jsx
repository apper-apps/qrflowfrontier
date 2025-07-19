import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const tools = [
    {
      title: t("createQRTitle"),
      description: t("createQRDescription"),
      icon: "QrCode",
      path: "/create",
      gradient: "from-primary-500 to-cyber-pink"
    },
    {
      title: t("scanQRTitle"),
      description: t("scanQRDescription"),
      icon: "ScanLine",
      path: "/scan",
      gradient: "from-cyber-green to-blue-500"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
            <span className="bg-gradient-to-r from-primary-400 via-cyber-pink to-cyber-green bg-clip-text text-transparent">
              {t("welcomeTitle")}
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t("welcomeDescription")}
          </p>
        </div>

        <motion.div
          className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-cyber-pink rounded-3xl flex items-center justify-center"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ApperIcon name="QrCode" size={64} className="text-white" />
        </motion.div>
      </motion.div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full group cursor-pointer" onClick={() => navigate(tool.path)}>
              <div className="space-y-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <ApperIcon name={tool.icon} size={32} className="text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-bold text-white">
                    {tool.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <Button
                  variant="secondary"
                  className="w-full group-hover:bg-white/20 transition-all duration-300"
                >
                  <span className="mr-2">Get Started</span>
                  <ApperIcon name="ArrowRight" size={16} />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Features Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {[
          { icon: "Palette", title: "Beautiful Design", description: "Stunning glassmorphism UI" },
          { icon: "Globe", title: "Multi-Language", description: "Support for 5 languages" },
          { icon: "Download", title: "Multiple Formats", description: "PNG, JPG, JPEG, SVG" }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <Card className="text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-cyber-pink/20 rounded-xl flex items-center justify-center mx-auto">
                  <ApperIcon name={feature.icon} size={24} className="text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;