import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import '@/styles/_reset.scss';
import '@/styles/_global.scss';
import createStore from "@/store";
import App from '@/App.tsx';

const { store, persistor } = createStore();

const root = ReactDOM.createRoot(document.getElementById("root")!);
console.log('root', root)
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </React.StrictMode>
);