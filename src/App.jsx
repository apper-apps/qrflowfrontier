import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/organisms/Layout";
import Home from "@/components/pages/Home";
import CreateQR from "@/components/pages/CreateQR";
import ScanQR from "@/components/pages/ScanQR";
import About from "@/components/pages/About";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import TermsOfService from "@/components/pages/TermsOfService";
import { LanguageProvider } from "@/hooks/useLanguage";
import { ThemeProvider } from "@/hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-900 dark:bg-slate-950 transition-colors duration-300">
          <div className="gradient-bg fixed inset-0 opacity-20"></div>
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="create" element={<CreateQR />} />
                <Route path="scan" element={<ScanQR />} />
                <Route path="about" element={<About />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
              </Route>
            </Routes>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            style={{ zIndex: 9999 }}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;