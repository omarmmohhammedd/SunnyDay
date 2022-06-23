import React from "react";
import "./App.css";
import First from "./First_Section/First";
import Footer from "./Footer/Footer";
import Main from "./Header/Header";
import Second from "./Second_Section/Second";
import Third from "./Third_Section/Third";


function App() {
  return (
    <div>
      <Main />
      <First />
      <Second />
      <Third />
      <Footer />
    </div>
  );
}

export default App;
