import React from 'react'
import { useAdminProductsContext } from '../../../../../context/ProductsContext/AdminProductsContext'

const AdminRequestCardTR = ({productId, price, quantity}) => {
    const {products} = useAdminProductsContext()

    const product = Array.isArray(products) && products.find(product => product.id === productId)
  return (
    <tr>
        <td className='text-[12px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default  '>
            {product?.titleName}
        </td>

        <td className='text-[12px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default'>
            S/. {price.toFixed(2)}
        </td>

        <td className='text-[12px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default text-center'>
           {quantity}
        </td>

        <td className='text-[12px] text-adminTextDark dark:text-adminTextWhite transition-all duration-300 cursor-default text-right'>
            S/. {(price * quantity).toFixed(2)}
        </td>
    </tr>
  )
}

export default AdminRequestCardTR
