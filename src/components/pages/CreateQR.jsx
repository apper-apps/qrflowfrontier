import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useLanguage } from "@/hooks/useLanguage";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";
import QRDisplay from "@/components/molecules/QRDisplay";
import Loading from "@/components/ui/Loading";
import ApperIcon from "@/components/ApperIcon";
import { 
  generateQRCode, 
  generateQRCodeSVG, 
  formatWiFiData, 
  formatContactCard,
  downloadQRCode,
  downloadSVG
} from "@/utils/qrGenerator";

const CreateQR = () => {
  const { t } = useLanguage();
  const [qrType, setQrType] = useState("text");
  const [qrData, setQrData] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    url: "",
    wifi: { ssid: "", password: "", security: "WPA" },
    contact: { firstName: "", lastName: "", phoneNumber: "", email: "" }
  });

  const handleInputChange = (field, value, subField = null) => {
    if (subField) {
      setFormData(prev => ({
        ...prev,
        [field]: { ...prev[field], [subField]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const generateQR = async () => {
    setLoading(true);
    try {
      let data = "";
      
      switch (qrType) {
        case "text":
          data = formData.text;
          break;
        case "url":
          data = formData.url;
          break;
        case "wifi":
          data = formatWiFiData(formData.wifi.ssid, formData.wifi.password, formData.wifi.security);
          break;
        case "contact":
          data = formatContactCard(formData.contact);
          break;
      }

      if (!data.trim()) {
        toast.error("Please enter data to generate QR code");
        return;
      }

      const qrDataURL = await generateQRCode(data);
      setQrCode(qrDataURL);
      setQrData(data);
      toast.success(t("qrGenerated"));
    } catch (error) {
      toast.error(error.message || t("errorOccurred"));
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (format) => {
    if (!qrCode || !qrData) return;

    try {
      const filename = `qrcode_${Date.now()}`;
      
      if (format === "svg") {
        const svgString = await generateQRCodeSVG(qrData);
        downloadSVG(svgString, filename);
      } else {
        // Convert to different formats if needed
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          
          const dataURL = canvas.toDataURL(`image/${format}`);
          downloadQRCode(dataURL, filename, format);
        };
        
        img.src = qrCode;
      }
      
      toast.success(`Downloaded as ${format.toUpperCase()}`);
    } catch (error) {
      toast.error("Failed to download QR code");
    }
  };

  const renderForm = () => {
    switch (qrType) {
      case "text":
        return (
          <Input
            label={t("text")}
            placeholder={t("enterText")}
            value={formData.text}
            onChange={(e) => handleInputChange("text", e.target.value)}
          />
        );
      
      case "url":
        return (
          <Input
            label={t("url")}
            type="url"
            placeholder={t("enterURL")}
            value={formData.url}
            onChange={(e) => handleInputChange("url", e.target.value)}
          />
        );
      
      case "wifi":
        return (
          <div className="space-y-4">
            <Input
              label={t("wifiSSID")}
              placeholder="Network Name"
              value={formData.wifi.ssid}
              onChange={(e) => handleInputChange("wifi", e.target.value, "ssid")}
            />
            <Input
              label={t("wifiPassword")}
              type="password"
              placeholder="Password"
              value={formData.wifi.password}
              onChange={(e) => handleInputChange("wifi", e.target.value, "password")}
            />
            <Select
              label="Security Type"
              value={formData.wifi.security}
              onChange={(e) => handleInputChange("wifi", e.target.value, "security")}
            >
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">No Password</option>
            </Select>
          </div>
        );
      
      case "contact":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label={t("firstName")}
                placeholder="First Name"
                value={formData.contact.firstName}
                onChange={(e) => handleInputChange("contact", e.target.value, "firstName")}
              />
              <Input
                label={t("lastName")}
                placeholder="Last Name"
                value={formData.contact.lastName}
                onChange={(e) => handleInputChange("contact", e.target.value, "lastName")}
              />
            </div>
            <Input
              label={t("phoneNumber")}
              type="tel"
              placeholder="+1234567890"
              value={formData.contact.phoneNumber}
              onChange={(e) => handleInputChange("contact", e.target.value, "phoneNumber")}
            />
            <Input
              label={t("email")}
              type="email"
              placeholder="email@example.com"
              value={formData.contact.email}
              onChange={(e) => handleInputChange("contact", e.target.value, "email")}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
          {t("createQRTitle")}
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          {t("createQRDescription")}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Settings" size={24} className="text-primary-400" />
                <h2 className="text-xl font-semibold text-white">Configuration</h2>
              </div>

              <Select
                label="QR Code Type"
                value={qrType}
                onChange={(e) => setQrType(e.target.value)}
              >
                <option value="text">{t("text")}</option>
                <option value="url">{t("url")}</option>
                <option value="wifi">{t("wifi")}</option>
                <option value="contact">{t("contactCard")}</option>
              </Select>

              {renderForm()}

              <Button
                onClick={generateQR}
                loading={loading}
                disabled={loading}
                className="w-full"
                size="lg"
              >
                <ApperIcon name="QrCode" size={20} className="mr-2" />
                {t("generate")}
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Preview Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Eye" size={24} className="text-primary-400" />
                <h2 className="text-xl font-semibold text-white">Preview</h2>
              </div>

              {loading ? (
                <Loading message="Generating QR code..." />
              ) : qrCode ? (
                <QRDisplay
                  qrCode={qrCode}
                  onDownload={handleDownload}
                  formats={["png", "jpg", "jpeg", "svg"]}
                />
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500/20 to-cyber-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="QrCode" size={48} className="text-primary-400" />
                  </div>
                  <p className="text-white/60">Configure and generate your QR code</p>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateQR;