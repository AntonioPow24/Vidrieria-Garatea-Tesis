import React from 'react'
import AdminRequestStats from '../../components/admin/AdminRequest/AdminRequestStats/AdminRequestStats'
import AdminRequestFilters from '../../components/admin/AdminRequest/AdminRequestFilters/AdminRequestFilters'
import AdminRequestBody from '../../components/admin/AdminRequest/AdminRequestBody/AdminRequestBody'

const RequestsAdmin = () => {
  return (
    <section className='p-[30px] flex flex-col gap-[30px] h-[100dvh] overflow-hidden overflow-y-auto TBodyRequestProducts'>
      <AdminRequestStats />

      <AdminRequestFilters />

      <AdminRequestBody />    
    </section>
  )
}

export default RequestsAdmin
