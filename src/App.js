import React from "react";

import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Page } from "./components/page/Page";
import './App.css'
import { errorsContext } from "./utils/context";

function App() {
  const [errors, setErrors] = React.useState({})

  return (
    <errorsContext.Provider value={{ errors, setErrors }}>
      <div className="App">
        <Header />
        <Page />
        <Footer />
      </div>
    </errorsContext.Provider>

  );
}
export default App;
