import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CartPage, HomePage, Contacts } from "./pages";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <main style={{ flexGrow: 1, height: "100%" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
