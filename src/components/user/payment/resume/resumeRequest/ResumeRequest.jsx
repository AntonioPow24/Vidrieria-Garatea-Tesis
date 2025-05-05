import React from 'react'
import RequestDelivery from './RequestDelivery'
import RequestAditionalInfo from './RequestAditionalInfo'
import RequestTotal from './RequestTotal'
import useResumeRequest from '../../../../../hooks/ResumeRequest/useResumeRequest'

const ResumeRequest = () => {

  const {
    deliveryMethod,
    setDeliveryMethod,
    deliveryCost,
    setDeliveryCost,
    city,
    setCity,
    dni,
    setDNI,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    subTotalCart,
    isLoading,
    handleGenerateOrder,
    handleDeliveryChange,
    handleCityChange,
    isValidOrder,
    error
  } = useResumeRequest(); 

  return (
    <section className='flex flex-col p-[20px] bg-[#1B1B1B] rounded-[8px] gap-[22px] justify-between smallTablet:max-w-full'>
          <RequestDelivery
            city={ city }
            setCity={ setCity }
            deliveryCost={ deliveryCost }
            deliveryMethod={ deliveryMethod }
            handleDeliveryChange={ handleDeliveryChange }
          />

          <RequestAditionalInfo 
            deliveryMethod={ deliveryMethod }
            setAddress={ setAddress }
            setDNI={ setDNI }
            setPhoneNumber={ setPhoneNumber }
          />

          <RequestTotal 
            deliveryCost={ deliveryCost }
            handleGenerateOrder={ handleGenerateOrder }
            isLoading={ isLoading }
            subTotalCart={ subTotalCart }
            deliveryMethod={ deliveryMethod }
            isValidOrder={ isValidOrder }
            error={ error }
          />
    </section>
  )
}

export default ResumeRequest
