import React, { useEffect } from 'react'
import ResumeItems from '../../components/user/payment/resume/ResumeItems'
import '../../styles/user/resume/resume.css'
import ResumeRequest from '../../components/user/payment/resume/resumeRequest/ResumeRequest'
import { useRequestsContext } from '../../context/RequestContext'
import Modal from '../../components/shared/Modal'
import { useCartContext } from '../../context/CartContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/UserContext'

const ResumeCart = () => {
  const { confirmationModal } = useRequestsContext()
  const { cart } = useCartContext()
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (cart.length === 0) {
      const timeout = setTimeout(() => {
        navigate('/tienda');
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [cart, navigate]);

  return (
    <>
      {
        user ?
          <section className='pt-[120px] pb-[44px] bg-appBgBlack flex justify-center 849to1480:pt-[232px] smallTablet:px-4'>
            <div className='flex gap-[20px] 1070:flex-col 580:w-full'>
              <ResumeItems />
              <ResumeRequest />
            </div>
          </section>
          :
          <Navigate to={'/'} />
      }
    </>
  )
}

export default ResumeCart
