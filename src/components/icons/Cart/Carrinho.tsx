import carrinhoIcon from '../../../assets/carrinho-de-compras.png'

import { RootState } from '../../../Store/store'
import { useSelector } from 'react-redux/es/hooks/useSelector'


export default function Carrinho(){

    const countQuantity = useSelector((state:RootState) => state.counterQuantity.value )

    return(
        <div className='cursor-pointer relative'>
            {countQuantity != 0 && <div className='w-6 h-6 bg-red-600 flex justify-center items-center rounded-full absolute bottom-4 left-4'>{countQuantity}</div>}
            <img className="w-7" src={carrinhoIcon} alt="carrinho" />
        </div>
    )
}