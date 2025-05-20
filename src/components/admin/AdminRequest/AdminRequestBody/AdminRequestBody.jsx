import React from 'react'
import useFinalRequest from '../../../../hooks/AdminRequestHook/useFinalRequest'

const AdminRequestBody = () => {

  const finalList = useFinalRequest()
  console.log(finalList);
  
  return (
    <div>
      AdminRequestBody
    </div>
  )
}

export default AdminRequestBody
