import { Link, useParams } from "react-router-dom"
import { useAuth } from "../../../../context/UserContext"
import { useRequestsContext } from "../../../../context/RequestContext"
import { useEffect, useState } from "react"
import Loader from "../../../shared/Loader"
import { requestFormatDate } from "../../../../utils/formatDate"

const PaidInfoRequest = () => {

    const { user } = useAuth()
    const { requestId } = useParams()
    const { getRequestById } = useRequestsContext()

    const [ requestDetails, setRequestDetails ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchRequestDetails = async () => {
            try {
                setIsLoading(true)
                const response = await getRequestById(Number(requestId))
                setRequestDetails(response[0])
                
            } catch (err) {
                setError("Error al obtener los detalles del pedido.")
            } finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            }
        }

        fetchRequestDetails()
    },[ requestId ])

    const {
        id,
        createdDate,
        totalOrder,
        priceDelivery,
        statusLabel,
        deliveryMethod,
    } = requestDetails || {}

  return (
    <div className="flex flex-col gap-[26px] flex-1 justify-between">
      {
        isLoading ? 
            <Loader message={"Cargando info del pedido"} />
        :
        <>
            <div>
                <h3 className=" text-[28px] leading-[34px] text-skyBlueApp ipad:text-center 700:text-[20px] 700:px-[10%]">
                    { user?.userName }
                    <span className="text-text-white">, tu pedido ha sido generado. Paga por medio de nuestras cuentas</span>
                </h3>
            </div>

            <main className="flex flex-col gap-[4px] ipad:items-center">

                <div className="flex gap-[4px]">
                    <span className="text-adminTextPurple">N° pedido:</span>
                    <span className="text-text-white"> #VG_00{ id && id }2025 </span>
                </div>

                <div className="flex gap-[4px]">
                    <span className="text-adminTextPurple">Fecha:</span>
                    <span className="text-text-white">{ createdDate && requestFormatDate( createdDate ) }</span>
                </div>

                <div className="flex gap-[4px]">
                    <span className="text-adminTextPurple">Total a pagar:</span>
                    <span className="text-text-white">
                        S/. { totalOrder && (totalOrder || 0).toFixed(2) }
                    </span>
                </div>

                <div className="flex gap-[4px]">
                    <span className="text-adminTextPurple">Delivery:</span>
                    <span className="text-text-white">
                      <span className="text-skyBlueApp">{deliveryMethod && deliveryMethod }</span>  - S/. { priceDelivery && (priceDelivery || 0).toFixed(2) }
                    </span>
                </div>

                <div className="flex gap-[4px]">
                    <span className="text-adminTextPurple">Estado:</span>
                    <span 
                    className={`text-[16px] ${ statusLabel === 'PENDIENTE' ? 'text-yellow-500' : statusLabel === 'COMPLETADO' ? 'text-green-500' : 'text-red-500' }`}
                    >
                        { statusLabel && statusLabel.toUpperCase() }
                    </span>
                </div>

            </main>
            

            <Link
                className="bg-appBgWhite rounded-[6px] py-[8px] w-[200px] px-[35px] ipad:m-auto"
                to={ "/configuration/myRequest" }
            >
                <span className="text-textDark text-[16px] font-medium">Ir a mis pedidos</span>
            </Link>
        </>
      }

    </div>
  )
}

export default PaidInfoRequest
