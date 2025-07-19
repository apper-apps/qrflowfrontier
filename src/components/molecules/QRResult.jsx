import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { useLanguage } from "@/hooks/useLanguage";
import { isURL, detectQRType } from "@/utils/qrScanner";

const QRResult = ({ result, onCopy, onOpen }) => {
  const { t } = useLanguage();

  if (!result) return null;

  const qrType = detectQRType(result);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="glass-effect rounded-xl p-4 border border-white/20">
        <div className="flex items-center space-x-2 mb-3">
          <ApperIcon name="QrCode" size={20} className="text-primary-400" />
          <span className="text-sm font-medium text-white/90">{t("result")}</span>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-white/70">{t("type")}: {t(qrType)}</div>
          <div className="text-white break-all p-3 bg-black/20 rounded-lg font-mono text-sm">
            {result}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="secondary"
          size="sm"
          onClick={onCopy}
          className="flex items-center space-x-2"
        >
          <ApperIcon name="Copy" size={16} />
          <span>{t("copy")}</span>
        </Button>

        {isURL(result) && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => onOpen(result)}
            className="flex items-center space-x-2"
          >
            <ApperIcon name="ExternalLink" size={16} />
            <span>{t("open")}</span>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default QRResult;