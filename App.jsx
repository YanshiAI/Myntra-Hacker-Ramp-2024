import "./App.css";
import ClothInfoForm from "./components/ClothForm";
import Header from "./components/Header";
import SellCloth2 from "./components/SellCloth2";
import SellClothes from "./components/SellPage";

function App() {
  return (
    <>
      <Header />
      <SellClothes />
      <ClothInfoForm />
      <SellCloth2 />
    </>
  );
}

export default App;
