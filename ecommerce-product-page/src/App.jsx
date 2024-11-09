import Header from "./components/Header";
import { MobileMenuProvider } from "./context/MobileMenuContext";
import Main from "./components/Main";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <MobileMenuProvider>
      <CartProvider>
        <div className="mx-auto w-full max-w-7xl">
          <Header />
          <Main />
        </div>
      </CartProvider>
    </MobileMenuProvider>
  );
}

export default App;
