import tenis from '../../assets/tenis_adidas.png'
import camisa from '../../assets/camisa_nba.png'
import calca from '../../assets/calca.png'
import carrinhoVazio from'../../assets/carrinho-vazio.png'

import Produto from "../Produto"
import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { stateNow } from '../../features/quantityCounter/quantityCounter'

interface ProdutosProps {
    id: number;
    cod: number;
    name: string;
    price: number;
    img: string;
    cart: boolean
}

const produtosAPI = [
    {
        id: 1,
        cod: 112415,
        name: 'Tenis Adidas',
        price: 269.89,
        img: tenis,
        cart: true
    },
    {
        id: 2,
        cod: 245954,
        name: 'Camisa Nike',
        price: 479.79,
        img: camisa,
        cart: true
    },
    {
        id: 3,
        cod: 354854,
        name: 'Camisa Nike',
        price: 119.59,
        img: calca,
        cart: true
    },

]

export default function TabelaProdutos(){
    const dispatch = useDispatch()
    const [produtos, setProdutos] = useState<ProdutosProps[]>(produtosAPI)
    const [quantidadeProdutos, setQuantidadeProdutos] = useState<number>(0)

    function removerProduto(id){       
        const newList = produtos.filter(produto => produto.id != id)
        setProdutos(newList)
    }

    useEffect(() =>{
        setQuantidadeProdutos(produtos.length)    
        dispatch(stateNow(quantidadeProdutos))
    }, [produtos, quantidadeProdutos])

    return(
    <>
    <div className='w-4/5'>

        <table className='w-full divide-y'>
            <thead>
                <tr>
                    <th className='px-5 py-6 uppercase'>Detalhes Produtos</th>
                    <th className='px-5 py-6 uppercase'>Quantidade</th>
                    <th className='px-5 py-6 uppercase'>Preço</th>
                    <th className='px-5 py-6 uppercase'>Total</th>
                    <th className='px-5 py-6 uppercase'></th>
                </tr>
            </thead>
            
            <tbody className='divide-y'>
                {produtos.length == 0 && 
                    <td className={'px-5 py-9'} colSpan={5}>
                     <div className='w-full flex flex-col items-center gap-5'>
                        <span>Carrinho Vazio</span>
                        <img src={carrinhoVazio} alt="carrinho vazio" className=' w-24 '/>
                        </div>
                     
                    </td>}
                
                {produtos.map((produto => (
                    <Produto 
                        key={produto.id}
                        id = {produto.id}
                        name ={produto.name} 
                        codigo={produto.cod}
                        price={produto.price}
                        img={produto.img}
                        cart={produto.cart}
                        removerProduto={removerProduto}
                    />
                )))}
            </tbody>
            
        </table>    
    </div>
    </>
    )
}