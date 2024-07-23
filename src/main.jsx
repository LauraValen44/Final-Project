import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./Components/Overview.jsx";
import Contacts from "./Components/Contacts.jsx";
import Favorites from "./Components/Favorites.jsx";
import { RegisterForm } from "./Components/index.js";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/RegisterForm",
        element: <RegisterForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
