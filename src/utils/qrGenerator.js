import QRCode from "qrcode";

export const generateQRCode = async (data, options = {}) => {
  try {
    const defaultOptions = {
      width: 400,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF"
      },
      errorCorrectionLevel: "M",
      ...options
    };

    const qrDataURL = await QRCode.toDataURL(data, defaultOptions);
    return qrDataURL;
  } catch (error) {
    console.error("Error generating QR code:", error);
    throw new Error("Failed to generate QR code");
  }
};

export const generateQRCodeSVG = async (data, options = {}) => {
  try {
    const defaultOptions = {
      width: 400,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF"
      },
      errorCorrectionLevel: "M",
      ...options
    };

    const qrSVG = await QRCode.toString(data, { 
      type: "svg", 
      ...defaultOptions 
    });
    return qrSVG;
  } catch (error) {
    console.error("Error generating QR code SVG:", error);
    throw new Error("Failed to generate QR code SVG");
  }
};

export const formatWiFiData = (ssid, password, security = "WPA") => {
  return `WIFI:T:${security};S:${ssid};P:${password};;`;
};

export const formatContactCard = (contact) => {
  const { firstName, lastName, phoneNumber, email } = contact;
  return `BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}
TEL:${phoneNumber}
EMAIL:${email}
END:VCARD`;
};

export const downloadQRCode = (dataURL, filename, format = "png") => {
  const link = document.createElement("a");
  link.download = `${filename}.${format}`;
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadSVG = (svgString, filename) => {
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `${filename}.svg`;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};