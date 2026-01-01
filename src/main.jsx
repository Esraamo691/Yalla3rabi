import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastProvider } from "@heroui/toast";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <ToastProvider />
      <App />
    </HeroUIProvider>
  </StrictMode>
);
