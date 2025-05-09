import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUserProductsContext } from '../../context/ProductsContext/UserProductsContext'
import DetailImage from '../../components/user/shop/product/detail/DetailImage'
import DetailInfo from '../../components/user/shop/product/detail/DetailInfo'

const ProductDetail = () => {

  const { productId } = useParams()
  
  const { getProductDetails } = useUserProductsContext()

  const [  productDetails, setProductDetails ] = useState({})

  useEffect(()=>{
    const fetchProductDetails = async () => {
      try {
        const details = await getProductDetails( Number(productId) )
        setProductDetails(details)
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails()
  },[productId])


  
  return (
    <section className=' bg-appBgBlack flex justify-center items-center pb-[20px] 1480to1920:pt-[117px] 850to1480:pt-[190px] 849:pt-[117px]'>
      <main className='max-w-[980px] w-full  py-[26px] flex items-center justify-center ipad:flex-col ipad:gap-5 bigPhone:max-w-[350px]'>
            <DetailImage 
              {...productDetails}
            />

            <DetailInfo 
              {...productDetails}
            />
      </main>
    </section>
  )
}

export default ProductDetail
