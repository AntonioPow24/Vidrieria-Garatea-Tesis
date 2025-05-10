import React, { useState } from 'react'
import Modal from '../../../shared/Modal'
import RequestDetail from './RequestDetail'
import { useRequestsContext } from '../../../../context/RequestContext'
import RequestCancelConfirm from './RequestCancelConfirm'
import { requestFormatDate } from '../../../../utils/formatDate'
import { citiesData } from '../../../../data/citiesData'

const RequestCard = ({ id, nameCity, priceDelivery, createdDate,  totalOrder, statusLabel, cityId }) => {

    const [ isDetailsOpen, setIsDetailOpen ] = useState( false )

    const [ isCancelRequest, setIsCancelRequest ] = useState( false )

    const { updateRequestState } = useRequestsContext()


    // Toggle del modal de los detalles
    const toggleModalDetail = () => setIsDetailOpen( prev => !prev)

    // Cancelar el pedido
    const cancelRequest = ( statusCode ) => {
        updateRequestState( id, statusCode )
        setIsCancelRequest( false )
    }

    // Cerrar el Modal de cancelar pedido
    const closeModal = ( shouldCancel, statusCode ) => {
        if(shouldCancel) {
            cancelRequest( statusCode )
        } else{
            setIsCancelRequest( false )
        }
    }

    // retornar el nombre de la ciudad con el citiesData
    const printCityName = (cityId) => {
    const city = citiesData.find(city => city.id === cityId);
    return city ? city.name : "Gratis"; // Devuelve un valor predeterminado si no se encuentra
    };

  return (
    <article className='p-[18px] bg-userDarkContrast flex flex-col justify-between 430:gap-5 h-min 390:requestContainer320'>
        <div className='flex justify-between'>
            <span className='text-[20px] bigPhone:text-[14px] text-text-white'>{ requestFormatDate( createdDate ) }</span>
            <span 
                className={`text-[20px] bigPhone:text-[14px] ${ statusLabel === 'PENDIENTE' ? 'text-yellow-500' : statusLabel === 'COMPLETADO' ? 'text-green-500' : 'text-red-500' }`}
            >
                { statusLabel }
            </span>
        </div>

        <section className='flex justify-between items-center bg-[#b2a9ab28] rounded-[6px] py-[10px] px-[16px] gap-[10px] 430:flex-col '>

            <div className='flex 430:w-full'>
                <div className='flex justify-center items-center flex-col gap-[6px] 430:flex-row 430:w-full 430:justify-between'>
                    <span className='text-adminTextPurple text-[18px] text-center 580:text-[16px]'>Total</span>
                    <span className='text-[14px] text-text-white text-center'>S/. { totalOrder.toFixed(2) }</span>
                </div>
            </div>
            
            <div className='flex 430:w-full'>
                <div className='flex justify-center items-center flex-col gap-[6px] 430:flex-row  430:w-full 430:justify-between'>
                    <span className='text-adminTextPurple text-[18px] text-center 580:text-[16px]'>Número de pedido</span>
                    <span className='text-[14px] text-text-white text-center'>#VG_00{ id }2025</span>
                </div>
            </div>

            <div className='flex 430:w-full'>
                <div className='flex justify-center items-center flex-col gap-[6px] 430:flex-row 430:w-full 430:justify-between'>
                    <span className='text-adminTextPurple text-[18px] text-center 580:text-[16px]'>Envío/Ciudad</span>
                    <span className='text-[14px] text-text-white text-center'>{cityId !== 0 ? `${printCityName(cityId)} - S/.${priceDelivery.toFixed(2)}` : "Gratis"}</span>
                </div>
            </div>

        </section>

        <div className='flex justify-end gap-[21px] 580:justify-center'>
            {
                statusLabel === 'PENDIENTE' && 

                <button 
                    className='bg-[#b054548f] py-1 rounded-[4px] w-full max-w-[200px]'
                    onClick={ () => setIsCancelRequest( true ) }
                >
                    <span className='text-[#E1A2A2] font-medium'>Cancelar pedido</span>
                </button>
            }

                <button 
                    className='bg-appBgWhite py-1 rounded-[4px] w-full max-w-[200px]'
                    onClick={() => setIsDetailOpen(true)}
                    >
                    <span className='text-textDark font-medium '>Detalle pedido</span>
                </button>

        </div>

        {
            isDetailsOpen &&
            <div className='w-full h-full top-0 left-0 fixed'>

                <Modal
                    isModal= {isDetailsOpen}
                    toggleModal={ toggleModalDetail }
                    anotherClass='flex justify-center items-center '
                >

                    <RequestDetail orderId={ id } />

                </Modal>
            </div>
        }


        {
            isCancelRequest &&

            <div className='w-full h-full top-0 left-0 fixed'>

                <Modal
                    isModal= {isCancelRequest}
                    toggleModal={ () => closeModal( false ) }
                    anotherClass='flex justify-center items-center '
                >

                        <RequestCancelConfirm closeModal={ closeModal } />

                </Modal>
        </div>
        }

    </article>
  )
}

export default RequestCard
