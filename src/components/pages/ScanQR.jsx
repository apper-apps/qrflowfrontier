import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useLanguage } from "@/hooks/useLanguage";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import QRResult from "@/components/molecules/QRResult";
import Loading from "@/components/ui/Loading";
import ApperIcon from "@/components/ApperIcon";
import { scanQRFromImage, isURL } from "@/utils/qrScanner";

const ScanQR = () => {
  const { t } = useLanguage();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (file) => {
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }

    setLoading(true);
    try {
      const scanResult = await scanQRFromImage(file);
      setResult(scanResult.text);
      toast.success(t("qrScanned"));
    } catch (error) {
      toast.error(error.message || t("noQRFound"));
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const copyToClipboard = async () => {
    if (!result) return;
    
    try {
      await navigator.clipboard.writeText(result);
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const openURL = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const downloadResult = (format) => {
    if (!result) return;

    const blob = new Blob([result], { 
      type: format === "pdf" ? "application/pdf" : "text/plain" 
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `qr_scan_result.${format}`;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success(`Downloaded as ${format.toUpperCase()}`);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
          {t("scanQRTitle")}
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          {t("scanQRDescription")}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Upload" size={24} className="text-primary-400" />
                <h2 className="text-xl font-semibold text-white">Upload Image</h2>
              </div>

              {/* Drag & Drop Area */}
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                  dragOver 
                    ? "border-primary-400 bg-primary-500/10" 
                    : "border-white/30 hover:border-white/50"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-cyber-pink/20 rounded-2xl flex items-center justify-center mx-auto">
                    <ApperIcon name="ImageIcon" size={32} className="text-primary-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-white font-medium">
                      Drop your image here or click to upload
                    </p>
                    <p className="text-white/60 text-sm">
                      Supports PNG, JPG, JPEG formats
                    </p>
                  </div>

                  <Button
                    variant="secondary"
                    onClick={() => fileInputRef.current?.click()}
                    className="mx-auto"
                  >
                    <ApperIcon name="Upload" size={16} className="mr-2" />
                    {t("uploadImage")}
                  </Button>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />

              {/* Camera Option (Note: Requires HTTPS in production) */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => toast.info("Camera feature requires HTTPS in production")}
                >
                  <ApperIcon name="Camera" size={16} className="mr-2" />
                  {t("useCamera")}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Result Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Search" size={24} className="text-primary-400" />
                <h2 className="text-xl font-semibold text-white">{t("result")}</h2>
              </div>

              {loading ? (
                <Loading message="Scanning QR code..." />
              ) : result ? (
                <QRResult
                  result={result}
                  onCopy={copyToClipboard}
                  onOpen={openURL}
                />
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyber-green/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="ScanLine" size={48} className="text-cyber-green" />
                  </div>
                  <p className="text-white/60">Upload an image to scan for QR codes</p>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ScanQR;