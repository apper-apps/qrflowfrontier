import jsQR from "jsqr";

export const scanQRFromImage = async (imageFile) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);

      if (code) {
        resolve({
          text: code.data,
          location: code.location
        });
      } else {
        reject(new Error("No QR code found in image"));
      }
    };

    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };

    img.src = URL.createObjectURL(imageFile);
  });
};

export const isURL = (text) => {
  try {
    new URL(text);
    return true;
  } catch {
    return false;
  }
};

export const detectQRType = (text) => {
  if (text.startsWith("WIFI:")) {
    return "wifi";
  } else if (text.startsWith("BEGIN:VCARD")) {
    return "contact";
  } else if (isURL(text)) {
    return "url";
  } else {
    return "text";
  }
};

export const parseWiFiData = (wifiString) => {
  const ssidMatch = wifiString.match(/S:([^;]*);/);
  const passwordMatch = wifiString.match(/P:([^;]*);/);
  const securityMatch = wifiString.match(/T:([^;]*);/);

  return {
    ssid: ssidMatch ? ssidMatch[1] : "",
    password: passwordMatch ? passwordMatch[1] : "",
    security: securityMatch ? securityMatch[1] : "WPA"
  };
};

export const parseContactCard = (vcardString) => {
  const nameMatch = vcardString.match(/FN:([^\n\r]*)/);
  const phoneMatch = vcardString.match(/TEL:([^\n\r]*)/);
  const emailMatch = vcardString.match(/EMAIL:([^\n\r]*)/);

  return {
    name: nameMatch ? nameMatch[1] : "",
    phone: phoneMatch ? phoneMatch[1] : "",
    email: emailMatch ? emailMatch[1] : ""
  };
};