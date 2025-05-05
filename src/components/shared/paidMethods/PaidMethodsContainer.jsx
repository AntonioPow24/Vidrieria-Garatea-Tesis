import React from 'react'
import PaidBancaMethods from './PaidBancaMethods'
import PaidQrMethods from './PaidQrMethods'

const PaidMethodsContainer = () => {
  return (
    <section className='flex gap-[26px] w-[920px] ipad:flex-col ipad:w-full ipad:items-center'>
 
        <PaidBancaMethods />
        <PaidQrMethods />

    </section>
  )
}

export default PaidMethodsContainer
