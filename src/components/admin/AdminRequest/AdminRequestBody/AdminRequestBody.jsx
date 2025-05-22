import React from 'react'
import useFinalRequest from '../../../../hooks/AdminRequestHook/useFinalRequest'
import { useAdminRequestContext } from '../../../../context/AdminRequestContext/AdminRequestContext';
import LoaderBig from '../../../shared/LoaderBig';
import AdminRequestCard from './AdminRequestCard/AdminRequestCard';



const AdminRequestBody = () => {

  const finalList = useFinalRequest()

  const { loading, error } = useAdminRequestContext()


  if (loading) {
    <div className='flex-1 flex justify-center items-center'>
      <LoaderBig message={"Cargando pedidos"} mode='white'/>
    </div>
  }

  if (error) {
    return (
      <div className='flex-1 flex justify-center items-center'>
        Hubo un error al cargar los pedidos
      </div>
    )
  }

  return (
    <div >
      {
        finalList && finalList.length ?
         
        <div className='flex-1 grid gap-[30px] RequestsAdminGrid'>
          {finalList.map(request =>
              <AdminRequestCard 
                request={request}
                key={request.id}
              /> 
          )}
        </div>
        :
        <div className='flex-1 flex justify-center items-center'>
          <span className='text-adminTextDark dark:text-adminTextWhite transition-all duration-300 text-[20px]'>
            No hay solicitudes pendientes
          </span>
        </div>
      }
    </div>
  )
}

export default AdminRequestBody
