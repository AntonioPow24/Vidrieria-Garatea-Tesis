import React from 'react'
import ResumeItems from '../../components/user/payment/resume/ResumeItems'
import '../../styles/user/resume/resume.css'
import ResumeRequest from '../../components/user/payment/resume/resumeRequest/ResumeRequest'
import { useRequestsContext } from '../../context/RequestContext'
import Modal from '../../components/shared/Modal'

const ResumeCart = () => {
  const { confirmationModal } = useRequestsContext()

  return (
    <section className='bg-appBgBlack pt-[160px] pb-[44px] flex justify-center 849to1480:pt-[232px] smallTablet:px-4'>
      <div className='flex  gap-[20px] 1070:flex-col '>
            <ResumeItems />

            <ResumeRequest />
      </div>
    </section>
  )
}

export default ResumeCart
