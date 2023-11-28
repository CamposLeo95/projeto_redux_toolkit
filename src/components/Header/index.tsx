import Carrinho from "../icons/Cart/Carrinho";

export default function Header(){
    return(
        <div className=" bg-teal-700 w-screen text-gray-50 px-36 h-16 flex justify-between items-center">
                <div>Logo</div>
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