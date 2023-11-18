import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Checkout from "./components/main/chackout/checkout";
import Customer from "./components/main/customer/customer";
import Download from "./components/main/downloadmobile/download";
import Intro from "./components/main/intro/intro";
import Provides from "./components/main/provides/provides";
import Servise from "./components/main/servise/servise";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Servise />
      <Provides />
      <Download />
      <Customer />
      <Checkout />
      <Footer />
    </>
  );
}

export default App;
