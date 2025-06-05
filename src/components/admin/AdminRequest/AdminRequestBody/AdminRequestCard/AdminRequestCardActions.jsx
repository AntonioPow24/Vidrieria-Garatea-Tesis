import React, { useState } from 'react'
import { STATUS_REQUEST_CODES } from '../../../../../data/adminData'
import Modal from '../../../../shared/Modal'
import { useAdminRequestContext } from '../../../../../context/AdminRequestContext/AdminRequestContext'
import SmallLoader from '../../../../shared/AdminLoaders/SmallLoader'
import { useAdminUsersContext } from '../../../../../context/AdminUsersContext/AdminUsersContext'
import { useAdminProductsContext } from '../../../../../context/ProductsContext/AdminProductsContext'
import { buildRequestPDFPayload } from '../../../../../utils/buildRequestPDFPayload'
import AdminRequestCardCreatePDF from './AdminRequestCardCreatePDF'

const AdminRequestCardActions = ({
    request
}) => {
    const { updateRequestState } = useAdminRequestContext()
    const { users } = useAdminUsersContext()
    const { products } = useAdminProductsContext()

    const [actionModalConfirm, setActionModalConfirm] = useState(false)
    const [statusToChangueMessage, setStatusToChangueMessage] = useState("")
    
    const [loadingActionChange, setLoadingActionChange] = useState(false);



    const handleActionModalConfirm = () => {
        setActionModalConfirm(!actionModalConfirm)
    }

    const changeStatusAction = (toThisStatus) => {
        const message = 
            toThisStatus === STATUS_REQUEST_CODES.CANCELLED_REQUEST_CODE ?
                "cancelar" : 
            toThisStatus === STATUS_REQUEST_CODES.COMPLETED_REQUEST_CODE ?
                "completar" : ""

        setStatusToChangueMessage(message)
        handleActionModalConfirm()
    }

    const callToActionUpdate = async () => {
        const timer = new Promise((resolve) => setTimeout(resolve, 800));

        const toThisStatus =
            statusToChangueMessage === "cancelar" ?
                STATUS_REQUEST_CODES.CANCELLED_REQUEST_CODE :
            statusToChangueMessage === "completar" &&
                STATUS_REQUEST_CODES.COMPLETED_REQUEST_CODE
            try {
                setLoadingActionChange(true)
                await updateRequestState(id,toThisStatus)
                await timer;
            } catch (error) {
                console.log(error);
                
            }finally{
                setLoadingActionChange(false)
                handleActionModalConfirm()
            }

    }

    const { id, status } = request

  return (
    <div className='flex justify-between items-center gap-[12px]'>
        { status === STATUS_REQUEST_CODES.PENDING_REQUEST_CODE ?
            <>
                <div className='flex-1'>
                    <button 
                        className='transition-all duration-300 bg-[#e7e7e7] dark:bg-[#303030] text-adminTextDark dark:text-adminTextWhite rounded-[4px] py-2 text-[14px] hover:bg-[#d7d7d7] dark:hover:bg-[#404040] w-full'
                        onClick={() => changeStatusAction(STATUS_REQUEST_CODES.CANCELLED_REQUEST_CODE)}
                    >
                        <span>Cancelar pedido</span>
                    </button>
                </div>

                <div className='flex-1'>
                    <button 
                        className='transition-all duration-300 bg-dashboardPurpleBg text-text-white rounded-[4px] py-2 text-[14px] w-full hover:bg-[#7452d3]'
                        onClick={() => changeStatusAction(STATUS_REQUEST_CODES.COMPLETED_REQUEST_CODE)}
                    >
                        <span>Completar pedido</span>
                    </button>
                </div>
            </>
            :   status === STATUS_REQUEST_CODES.COMPLETED_REQUEST_CODE &&
                <AdminRequestCardCreatePDF 
                    products={products}
                    request={request}
                    users={users}
                />
        }

        {
            actionModalConfirm &&
            <div className="w-full h-full top-0 left-0 fixed z-[200]">
                <Modal
                    toggleModal={handleActionModalConfirm}
                    isModal={actionModalConfirm}
                    anotherClass='flex justify-center items-center'
                >
                    <section 
                        className='bg-adminBgWhite dark:bg-appBgBlack rounded-[8px] px-[16px] py-[20px] z-[200]'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='flex flex-col gap-[20px]'>
                            <h4 className='text-adminTextDark dark:text-adminTextWhite transition-all duration-300 text-[16px] 1500:text-[14px] font-semibold text-center'>
                                ¿Estás seguro de que deseas {statusToChangueMessage && statusToChangueMessage} el pedido?
                            </h4>

                            <div>
                                <button 
                                    className={`transition-all duration-300   rounded-[4px] py-2 text-[14px] w-full ${statusToChangueMessage === "completar" ?  "bg-dashboardPurpleBg hover:bg-[#7452d3] text-text-white" : " bg-[#e7e7e7] dark:bg-[#303030] text-adminTextDark dark:text-adminTextWhite hover:bg-[#d7d7d7] dark:hover:bg-[#404040]"}`}
                                    onClick={callToActionUpdate}
                                >
                                    <span className='uppercase text-[14px]'>
                                        {
                                            loadingActionChange ?
                                                <SmallLoader
                                                    message={"Cambiando estado"}
                                                />
                                            :

                                            `Sí, ${statusToChangueMessage} el pedido`
                                        }
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>
                </Modal>
            </div>
        }

    </div>
  )
}

export default AdminRequestCardActions
