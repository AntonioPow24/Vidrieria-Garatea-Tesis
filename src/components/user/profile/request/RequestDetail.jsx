import React, { useEffect, useState } from 'react'
import { useRequestsContext } from '../../../../context/RequestContext'
import LoadingSpinner from '../../../shared/LoadingSpinner';
import RequestDetailItem from './RequestDetailItem';


const detailTest = {
    dni:'70204303',
    city:'Chimbote',
    phoneNumber:'928517790',
    itemsRequest:[
        {
            productId: '24',
            titleName: 'Silicona Dowsil con nombre extremadamente largo',
            price: 13,
            quantity: '3',
            category: 'siliconas',
            imageUrl: 'https://vinifan.com/wp-content/uploads/2020/01/Silicona-liquida.png',
        },
        {
            productId: '23',
            titleName: 'Silicona Dowsil con nombre extremadamente largo',
            price: 13,
            quantity: '3',
            category: 'siliconas',
            imageUrl: 'https://vinifan.com/wp-content/uploads/2020/01/Silicona-liquida.png',
        },
        {
            productId: '22',
            titleName: 'Silicona Dowsil con nombre extremadamente largo',
            price: 13,
            quantity: '3',
            category: 'siliconas',
            imageUrl: 'https://vinifan.com/wp-content/uploads/2020/01/Silicona-liquida.png',
        },
        {
            productId: '21',
            titleName: 'Silicona Dowsil con nombre extremadamente largo',
            price: 13,
            quantity: '3',
            category: 'siliconas',
            imageUrl: 'https://vinifan.com/wp-content/uploads/2020/01/Silicona-liquida.png',
        },
        {
            productId: '25',
            titleName: 'Silicona Dowsil con nombre extremadamente largo',
            price: 13,
            quantity: '3',
            category: 'siliconas',
            imageUrl: 'https://vinifan.com/wp-content/uploads/2020/01/Silicona-liquida.png',
        },
    ],
    totalRequest: 52.00
}

const RequestDetail = ( { requestId } ) => {

    const { getRequestById } = useRequestsContext()

    const [requestDetails, setRequestDetails] = useState(detailTest);


    // useEffect(() => {

    //     const request = getRequestById(requestId); 

    //     setRequestDetails(request); 

    // }, [requestId, getRequestById]);




  return (
    <section className='z-[200] max-w-[520px] min-h-[100px] w-full bg-userDarkContrast flex flex-col justify-center items-center rounded-[12px] overflow-hidden 580:w-[340px] 580:rounded-[8px]'>
        {
            requestDetails ?
                <>
                    <div className='flex px-[14px] py-[15px] items-center justify-start w-full 580:px-[6px]'>
                        <span className='text-[18px] text-text-white font-medium 580:text-[12px]'>Total productos: { requestDetails.itemsRequest.length }</span>
                    </div>

                    <div className='flex flex-col w-full overflow-y-auto h-[400px] detailRequestScroll'>
                        {
                            requestDetails.itemsRequest.length > 0 &&
                            requestDetails.itemsRequest.map( item => 
                                <RequestDetailItem key={ item.productId} { ...item } />
                            ) 
                        }
                    </div>

                    <div className='flex px-[14px] py-[15px] items-center justify-end w-full border-textWhiteTransparent border-t-[1px] 580:px-[6px]'>
                        <p className='text-[18px] text-text-white font-medium 580:text-[12px]'>Total: <span className='text-[20px] text-text-white font-medium 580:text-[12px]'>S/.{ requestDetails.totalRequest.toFixed( 2 ) }</span></p>
                    </div>
                </>
            : <LoadingSpinner sizeSpinner={ '50' } />
        } 
    </section>
  )
}

export default RequestDetail
