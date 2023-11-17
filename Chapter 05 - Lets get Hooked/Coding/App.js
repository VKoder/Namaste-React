import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Hero />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
