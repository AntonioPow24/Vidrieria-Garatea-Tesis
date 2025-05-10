import React from 'react'
import { useCartContext } from '../../../../context/CartContext'
import ResumeItem from './ResumeItem';

const ResumeItems = () => {

    const { cart } = useCartContext()

    const expressionItem = cart.length > 1 ? 'items' : 'item';

  return (
    <section className='flex flex-col bg-[#1B1B1B] p-[20px] rounded-[8px]'>
            <div className='flex justify-between w-full items-center border-b border-textWhiteTransparent pb-[10px]'>
                <h2 className='text-text-white text-[28px] smallTablet:text-[18px]'>Mi carrito</h2>
                <span className='text-text-white text-[20px]'>{ cart.length } { expressionItem }</span>
            </div>

            <main className={`flex h-[432px] flex-col overflow-y-auto resumeItemsContainer ${cart.length > 3 && 'pr-[10px]'} ${ cart.length === 0 && 'justify-center' }`}>
                {
                    cart.length > 0?
                    
                    cart.map( item => <ResumeItem {...item} key={ item.id } /> )

                    :
                    <div className='w-full flex justify-center items-center'>
                        <p className='text-text-white text-[16px] smallTablet:text-[12px]'>No tienes productos en el carrito, ve a la tienda</p>
                    </div>
                }
            </main>    
    </section>
  )
}

export default ResumeItems
