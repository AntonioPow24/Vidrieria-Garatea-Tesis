import React from 'react'
import PaidReviewContainer from '../../components/user/payment/paid/PaidReviewContainer'
import { useAuth } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'

const ResumePaid = () => {
  const { user } = useAuth()
  return (
    <section className=''>
      {
        user ?
          <section className='pt-[117px] bg-appBgBlack flex justify-center 849to1480:pt-[232px]'>
        
        <PaidReviewContainer 
        
        />

        </section>
        :
          <Navigate to={'/'} />
      }
    </section>
  )
}

export default ResumePaid
