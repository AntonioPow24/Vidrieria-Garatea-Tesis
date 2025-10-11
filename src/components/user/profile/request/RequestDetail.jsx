import React, { useEffect, useState } from 'react'
import { useRequestsContext } from '../../../../context/RequestContext'
import LoadingSpinner from '../../../shared/LoadingSpinner';
import RequestDetailItem from './RequestDetailItem';
import { useUserProductsContext } from '../../../../context/ProductsContext/UserProductsContext';
import { Loader } from 'lucide-react';
import SmallLoader from '../../../shared/AdminLoaders/SmallLoader';


const detailTest = {
    dni:'70204303',
    city:'Chimbote',
    phoneNumber:'928517790',
    items:[
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

const RequestDetail = ( { orderId } ) => {

    const { getRequestById } = useRequestsContext()
    const { getProductDetails } = useUserProductsContext()

    const [ productDetailsMap, setProductDetailsMap ] = useState(null)

    const [requestDetails, setRequestDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequestDetails = async () => {
            try {
                setIsLoading(true)
                
                const response = await getRequestById(Number(orderId))
                setRequestDetails(response[0])

                // Mapa para multiple fetch
                const productDetailsPromises = response[0].orderItems?.map( async item => getProductDetails(item.productId, true))

                const productDetailsArray = await Promise.all(productDetailsPromises)
                
                const productDetailsMap = productDetailsArray.reduce((acc, details, index) => {
                    acc[response[0].orderItems[index].productId] = details;
                    return acc;
                },{})

                setProductDetailsMap(productDetailsMap)
                
            } catch (err) {             
                setError("Error al obtener los detalles del pedido.")
            } finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            }
        }

        fetchRequestDetails()
    },[ orderId ])


  return (
    <section className='z-[200] max-w-[520px] min-h-[100px] w-full bg-userDarkContrast flex flex-col justify-center items-center rounded-[12px] overflow-hidden 580:w-[340px] 580:rounded-[8px]'>
        {
            isLoading ? <SmallLoader message={"Cargando detalles"} />
            : requestDetails &&
            <>
                <div className='flex px-[14px] py-[15px] items-center justify-start w-full 580:px-[6px]'>
                    <span className='text-[18px] text-text-white font-medium 580:text-[12px]'>Total productos: { requestDetails.orderItems.length }</span>
                </div>

                <div className='flex flex-col w-full overflow-y-auto h-[400px] detailRequestScroll'>
                    {
                        requestDetails.orderItems.length > 0 &&
                        requestDetails.orderItems.map( item => 
                            <RequestDetailItem key={ item.productId} { ...item } productDetails = { productDetailsMap[item.productId] } />
                        ) 
                    }
                </div>

                <div className='flex px-[14px] py-[15px] items-center justify-end w-full border-textWhiteTransparent border-t-[1px] 580:px-[6px]'>
                    <p className='text-[18px] text-text-white font-medium 580:text-[12px]'>Total: <span className='text-[20px] text-text-white font-medium 580:text-[12px]'>S/.{ requestDetails.totalOrder.toFixed( 2 ) }</span></p>
                </div>
            </>    
        } 
    </section>
  )
}

export default RequestDetail
