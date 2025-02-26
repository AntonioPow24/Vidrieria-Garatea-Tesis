import React from 'react'

const RequestCancelConfirm = ({ closeModal }) => {
  return (
            <div className="flex flex-col items-center z-[200] px-[40px] bg-[#363636] rounded-[10px] py-[16px] gap-[25px]">
                    <p className="text-text-white">¿Estás seguro de cancelar este pedido?</p>
                    <div className="flex gap-6">
                        <button
                            onClick={() => closeModal(false)}  // Solo cierra el modal sin hacer nada
                            className="bg-appBgWhite text-textDark py-2 px-4 rounded"
                        >
                                Conservar pedido
                        </button>
                        <button
                            onClick={() => closeModal(true)}  // Confirmar cancelación
                            className="bg-[#a76d6d] text-text-white py-2 px-4 rounded"
                        >
                                Cancelar pedido
                        </button>
                    </div>
            </div>
  )
}

export default RequestCancelConfirm
