import Header from "./components/Header/Header";
import SingleToSingle from "./components/SingleToSingle/SingleToSingle";
import Footer from "./components/Footer/Footer";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SingleToSingle />
      </div>
        <Footer />
    </div>
  );
}

export default App;
