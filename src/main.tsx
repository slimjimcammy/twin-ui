import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="">
    <App />
  </GoogleOAuthProvider>
);
