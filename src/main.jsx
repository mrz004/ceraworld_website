import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "animate.css/animate.compat.css";
import "./index.scss";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import ProductCategory from "./components/products/ProductCategory";
import ProductCollections from "./components/products/ProductCollection.jsx";
import ProductGallery from "./components/products/ProductGallery.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="products/:category" element={<ProductCategory />} />
      <Route
        path="products/:category/:collection"
        element={<ProductCollections />}
      />
      <Route
        path="products/:category/:collection/view"
        element={<ProductGallery />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
