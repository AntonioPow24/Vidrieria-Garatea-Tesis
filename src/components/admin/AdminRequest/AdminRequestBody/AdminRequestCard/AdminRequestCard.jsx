import React from 'react'
import AdminRequestCardHeader from './AdminRequestCardHeader'
import AdminRequestCardActions from './AdminRequestCardActions'
import AdminRequestCardBody from './AdminRequestCardBody'
import { STATUS_REQUEST_CODES } from '../../../../../data/adminData'

const AdminRequestCard = ({request}) => {
  return (
    <article className='rounded-[12px] bg-adminBgWhite dark:bg-appBgBlack transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex flex-col gap-[10px] p-[12px] justify-between'>
            <AdminRequestCardHeader
              {...request}
            />
            <AdminRequestCardBody
              {...request}
            />
            {
              request.status !== STATUS_REQUEST_CODES.CANCELLED_REQUEST_CODE &&
                <AdminRequestCardActions
                  request={request}
                />
            }
    </article>
  )
}

export default AdminRequestCard
