import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import { store } from "./redux/store.ts";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
console.log("Rendering App");

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000000",
            color: "#ffffff",
          },
        }}
      />
    </Provider>
  </StrictMode>
);
