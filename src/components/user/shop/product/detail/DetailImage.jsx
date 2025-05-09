import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserProductsContext } from '../../../../../context/ProductsContext/UserProductsContext'

const DetailImage = ({ titleName, imageUrl }) => {

    const { isLoading } = useUserProductsContext()

    const navigate = useNavigate()

    const handleBack = () => {
        navigate( -1 )
    }


  return (
    <section className='pr-[40px] max-w-[490px] w-full border-r border-[#616161] h-[430px] ipad:pr-0 ipad:border-none transition-all duration-300 bigPhone:max-w-[350px] bigPhone:h-[330px]'>

        {
            isLoading ? 
            <div className='flex justify-center items-center gap-3 w-full h-full'>
                <span className='text-adminTextWhite'>Cargando imagen</span>
                <div class="spinner"></div>
            </div>
            :
            <div className='flex flex-col items-center justify-between gap-[30px]'>
                <div 
                    className='flex items-center justify-start w-full'
                >
                    <div
                        className='flex gap-2 items-center cursor-pointer'
                        onClick={ handleBack }
                    >
                        <i className="fa-solid fa-angle-left text-[14px]  text-text-white"></i>
                        <span className='text-[14px] text-text-white'>Volver atrás</span>
                    </div>
                </div>

                <div className='w-full max-w-[450px] h-[380px] flex justify-center bg-[#1E1E1E] rounded-[6px] overflow-hidden bigPhone:h-[280px]'>
                    <div className='h-full'>
                        <img 
                            src={ imageUrl }
                            alt={ titleName }
                            className='object-cover h-full' 
                        />
                    </div>
                </div>

            </div>
        }

    </section>
  )
}

export default DetailImage
