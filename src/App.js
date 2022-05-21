import React from "react";

import Categories from "./components/Categories";
import Nav from "./components/Nav";
import Video from "./components/Video";
import Faqs from "./components/Faqs";
import Readings from "./components/Readings";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <img
        style={{ height: "650px", width: "auto" }}
        src="https://firebasestorage.googleapis.com/v0/b/sea-basket-9c19f.appspot.com/o/background.png?alt=media&token=79d1a096-b768-4def-ac29-cc8ff12ebace"
      />

      <Categories />
      <Video />
      <Faqs />
      <Readings />
      <br></br>
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
