import React from "react";
import Navbar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";
import Anlytics from "./components/anlytics/anlytics.component";
import News from "./components/news/news.component";
import Card from "./components/card/card.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Anlytics />
      <News />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
