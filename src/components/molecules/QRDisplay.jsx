import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { useLanguage } from "@/hooks/useLanguage";

const QRDisplay = ({ qrCode, onDownload, formats = ["png", "jpg", "jpeg", "svg"] }) => {
  const { t } = useLanguage();

  if (!qrCode) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-center">
        <div className="p-4 glass-effect rounded-2xl border border-white/20">
          <img 
            src={qrCode} 
            alt="Generated QR Code" 
            className="w-64 h-64 rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {formats.map((format) => (
          <Button
            key={format}
            variant="secondary"
            size="sm"
            onClick={() => onDownload(format)}
            className="flex items-center space-x-2"
          >
            <ApperIcon name="Download" size={16} />
            <span>{format.toUpperCase()}</span>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default QRDisplay;