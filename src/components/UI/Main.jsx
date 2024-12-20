import React from "react";
import { Link, Routes } from "react-router-dom";
import Home from "../../pages/Home";

const Main = ({ children }) => {
    return (
      <main className="main-area" style={{ flex: 1 }}>
        {children} {/* This will render the content of the route */}
      </main>
    );
  };
  

export default Main; 