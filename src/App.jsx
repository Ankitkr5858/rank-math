// import './App.css'
import "../src/assets/style/index.css";
import BitcoinWallet from "./components/BitcoinWallet/BitcoinWallet";
import BuyAndSellBtnc from "./components/BuyAndSellBtc/BuyAndSellBtnc";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import Graph from "./components/Graph/Graph";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

function App() {
  return (
    <>
      <NavigationMenu />
      <main className="overflow-hidden mainBody">
        <BitcoinWallet />
        <Graph />
        <BuyAndSellBtnc />
        <FooterMenu />
      </main>
    </>
  );
}

export default App;
