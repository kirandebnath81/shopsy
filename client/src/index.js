import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//context-providers
import {
  FiltersProvider,
  ModalProvider,
  AuthProvider,
  ProfileProvider,
  ProductsProvider,
} from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FiltersProvider>
      <ModalProvider>
        <AuthProvider>
          <ProfileProvider>
            <ProductsProvider>
              <App />
            </ProductsProvider>
          </ProfileProvider>
        </AuthProvider>
      </ModalProvider>
    </FiltersProvider>
  </React.StrictMode>
);
