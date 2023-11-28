import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { increment, decrement } from "../../features/totalCounter/totalSlice"

interface ProdutoProps {
        id?: number,
        codigo: number,
        name: string,
        price: number,
        img: string,
        cart: boolean,
        removerProduto: (id:number) => void
}

export default function Produto({ id, name, codigo, price, img, removerProduto } : ProdutoProps){

    const dispatch = useDispatch()

    const [quantidade, setQuantidade] = useState(0)
    const [total, setTotal] = useState(0)


    function addQuantidade (){
        setQuantidade((value)=> value += 1)
        dispatch(increment(price))
    }

    function removeQuantidade (){
        if(quantidade < 0){
            dispatch(decrement(0))
        }else{
            setQuantidade((value)=> value -= 1)
            dispatch(decrement(price))
        }
    }

    function zerarQuantidade (){
        dispatch(decrement(total))
    }

    function calcTotal(){
        setTotal(() => price * quantidade)
    }

    useEffect(() => {
        addQuantidade ()
        removeQuantidade ()
        calcTotal()
    })

    return(
        <tr className="bg-slate-100">
            <td className=" max-h-14 flex-1 px-5 py-3 w-full">
                <div  className='flex justify-center items-center gap-2'>
                    <img src={img} className='w-24'/>
                    <div className='flex flex-col'>
                        <p>{name}</p>
                        <p className='text-xs text-slate-500'><span>Cod:</span>{codigo}</p>
                    </div>
                </div>
            </td>
            <td className="max-h-14 px-5 py-3 w-full">
                <div className='flex justify-center items-center gap-4 p-7'>
                    <button onClick={removeQuantidade}>-</button>
                    <div className='border-solid border-2 border-gray-400 p-1'>{quantidade}</div>
                    <button onClick={() => {addQuantidade(), console.log(total)}}>+</button>
                </div>
            </td>
            <td className="max-h-14 px-5 py-3 w-full">
                <div 
                className='p-5 flex align-center justify-center gap-1'>
                    <span>R$</span> 
                    <span>{(price).toFixed(2)}</span>
                </div>
            </td>
            <td className="max-h-14 px-5 py-3 w-full">
                <div 
                className='p-5 flex align-center justify-center gap-1'>
                    <span>R$</span> 
                    <span>{(total).toFixed(2)}</span>
                </div>
            </td>
            <td className="max-h-14 px-5 py-3 w-full">
                <div className='p-7'>
                    <button 
                        className="cursor-pointer text-slate-500" 
                        onClick={() => {
                            removerProduto(id)
                            zerarQuantidade()
                        }}>
                            x
                    </button>   
                </div>
            </td>
        </tr>
    )
}