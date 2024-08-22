import React from "react";

// pages
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  )
}

export default App
