import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import appRoutes from "./routes";
import "./i18n";

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRoutes} />
    </div>
  );
}

export default App;
