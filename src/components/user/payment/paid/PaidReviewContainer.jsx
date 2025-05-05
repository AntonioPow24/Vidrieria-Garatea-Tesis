import React from 'react'
import PaidInfoRequest from './PaidInfoRequest'
import PaidStepsComplete from './PaidStepsComplete'
import PaidMethodsContainer from '../../../shared/paidMethods/PaidMethodsContainer'

const PaidReviewContainer = () => {
  return (
    <section className='p-[20px] flex flex-col justify-center gap-[32px] w-[964px] '>
        <div className='flex gap-[26px] h-[340px] ipad:flex-col ipad:h-full'>            
            <PaidInfoRequest />

            <PaidStepsComplete />
        </div>

        <div className='flex justify-center'>
            <PaidMethodsContainer />
        </div>
    </section>
  )
}

export default PaidReviewContainer
