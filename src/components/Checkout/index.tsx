import { RootState } from '../../Store/store'
import bandeiras from '../../assets/bandeiras.png'
import { useSelector } from 'react-redux'

export default function Checkout(){

    const countTotal = useSelector((state: RootState)=> state.counterTotal.value)

    return(
        <div className="w-96 min-w-[250px] flex flex-col justify-between h-96 p-4 border-solid border-2 border-slate-300 gap-y-4 ">
            <h3 className='font-bold'>Total</h3>
            <div className="flex justify-between">
                <span>Sub-Total</span>
                <span>R$ {(countTotal).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span>Delivery</span>
                <span>icone</span>
            </div>
            <button className="bg-green-600 p-2 text-white text-lg ">Check Out</button>
            <h3 className='font-bold'>Formas de pagamento</h3>
            <div className="flex justify-center">
                <img src={bandeiras} alt="bandeiras" />
            </div>
            <div className='flex justify-center'>
                <span className='font-light text-sm	text-slate-600'>Get A discount code? add in the next step</span>
            </div>
        </div>
    )
}