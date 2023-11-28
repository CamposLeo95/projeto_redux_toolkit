import Carrinho from "../icons/Cart/Carrinho";
import logo from "../../assets/leao.png"

export default function Header(){
    return(
        <div className=" bg-slate-950 w-screen text-yellow-500 px-36 h-16 flex justify-between items-center">
                <div>
                    <img src={logo} alt="logo-leao" className="w-16" />
                </div>
                <div className="flex items-center gap-5">
                    <ul className="flex gap-5">
                        <li>Home</li>
                        <li>Produtos</li>
                        <li>Sobre</li>
                    </ul>
                    <div>
                       <Carrinho />
                    </div>
                </div>
        </div>
    )
}