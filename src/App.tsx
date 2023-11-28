import Checkout from "./components/Checkout";
import Header from "./components/Header";
import TabelaProdutos from "./components/TabelaProdutos";

function App() {
  return (
    <div className="w-screen flex flex-col justify-center items-center	gap-5">
      <Header />
      <div className=" flex flex-col w-4/5 gap-6">
        <div>
          <h1 className="text-3xl">Carrinho</h1>
        </div>
        <div className="flex gap-5">
          <TabelaProdutos />
          <Checkout />
        </div>
      </div>
    </div>
  )
}

export default App
