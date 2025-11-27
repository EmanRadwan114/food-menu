import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MealsContextProvider } from "./contexts/MealsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <MealsContextProvider>
    <App />
  </MealsContextProvider>
);
