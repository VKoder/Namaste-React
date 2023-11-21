import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import TopCarousal from "./Components/TopCarousal";


const AppLayout = () => (
  <div className="app">
    <Header />
    <TopCarousal/>
    <Hero />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
