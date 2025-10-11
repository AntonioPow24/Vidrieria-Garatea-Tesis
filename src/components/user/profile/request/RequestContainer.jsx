import React, { useState } from 'react'
import { useRequestsContext } from '../../../../context/RequestContext'
import '../../../../styles/user/requests/myrequest.css'
import RequestCard from './RequestCard'
import PaidMethodsContainer from '../../../shared/paidMethods/PaidMethodsContainer';


const statusOptions = ["Pendientes", "Completados", "Cancelados"];


const RequestContainer = () => {

  const { requests } = useRequestsContext()
    
  const [selectedStatus, setSelectedStatus] = useState("Pendientes") 

  const filteredRequest = requests
  ?.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
  ?.filter(request => {
    const statusMap = {
      Pendientes: "PENDIENTE",
      Completados: "COMPLETADO",
      Cancelados: "CANCELADO",
    };
    return request.statusLabel === statusMap[selectedStatus];
  });

  return (
    <section className='py-[80px] px-[8%] 770:py-[20px] bg-appBgBlack laptop:px-[0] flex flex-col gap-[30px]'>
      
      <div className='flex  770:flex-col 770:gap-6'>
        <div className='flex max-w-[310px] w-full border-r border-textWhiteTransparent pb-[100px] 770to1480::max-w-[200px] 770:border-none 770:max-w-full 770:justify-center 770:pb-0'>
            <nav className="flex flex-col gap-2  w-full 770:flex-row  ">
              {statusOptions?.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`w-full text-right px-3 py-2 rounded 770:text-center `}
                >
                  <span className={`text-[22px] bigPhone:text-[16px] ${
                    selectedStatus === status ? "text-text-white font-medium" : "text-[#f9f9f970]"
                  }`}> {status}</span>
                </button>
              ))}
            </nav>
        </div>

        {filteredRequest.length > 0 ? 
          <div className=' flex-1  px-[4%]  max-h-[655px] requestContainerScroll'>
              <div className='w-full h-full requestContainer'>

                  {filteredRequest?.map(request => <RequestCard {...request} key={request.id} />)}
              </div>
          </div>      
          : 
          <div className=' flex-1 flex justify-center items-center '>
            <p className="text-textWhiteTransparent text-center">No hay pedidos en esta categoría.</p>
          </div>
          }
      </div>

      <div className=' flex justify-center'>
        <PaidMethodsContainer />
      </div>          


    </section>
  )
}

export default RequestContainer
