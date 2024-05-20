import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Global from "./styles/Global";


export function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Footer />
      <Global />
    </div>
  );
}


export default App;