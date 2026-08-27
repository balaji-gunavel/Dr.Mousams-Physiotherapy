import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize Google Analytics 4 globally
const measurementId = "G-K47Z9SENZY";

const script = document.createElement("script");
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(...args: unknown[]) {
  window.dataLayer.push(args);
}
gtag("js", new Date());
gtag("config", measurementId);

createRoot(document.getElementById("root")!).render(<App />);


