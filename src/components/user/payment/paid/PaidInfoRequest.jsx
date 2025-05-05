import { Link, useParams } from "react-router-dom"
import { useAuth } from "../../../../context/UserContext"
import { useRequestsContext } from "../../../../context/RequestContext"

const PaidInfoRequest = () => {

    const { user } = useAuth()

    const { requestId } = useParams()

    console.log(requestId);
    

    const { getRequestById } = useRequestsContext()

    const requestDetails = getRequestById( Number(requestId) )
    

  return (
    <div className="flex flex-col gap-[26px] flex-1 justify-between">
      
        <div>
            <h3 className=" text-[28px] leading-[34px] text-skyBlueApp ipad:text-center 700:text-[20px] 700:px-[10%]">
                { user?.userName }
                <span className="text-text-white">, tu pedido ha sido generado. Paga por medio de nuestras cuentas</span>
            </h3>
        </div>

        <main className="flex flex-col gap-[4px] ipad:items-center">

            <div className="flex gap-[4px]">
                <span className="text-adminTextPurple">N° pedido:</span>
                <span className="text-text-white">{ requestDetails?.orderId }</span>
            </div>

            <div className="flex gap-[4px]">
                <span className="text-adminTextPurple">Fecha:</span>
                <span className="text-text-white">{ requestDetails?.registerDate }</span>
            </div>

            <div className="flex gap-[4px]">
                <span className="text-adminTextPurple">Total a pagar:</span>
                <span className="text-text-white">S/. { requestDetails?.totalOrder.toFixed(2) }</span>
            </div>

            <div className="flex gap-[4px]">
                <span className="text-adminTextPurple">Delivery:</span>
                <span className="text-text-white">S/. { requestDetails?.priceDelivery.toFixed(2) }</span>
            </div>

            <div className="flex gap-[4px]">
                <span className="text-adminTextPurple">Estado:</span>
                <span 
                className={`text-[16px] ${ requestDetails?.orderStatus === 'Pendiente' ? 'text-yellow-500' : requestDetails?.orderStatus === 'Completado' ? 'text-green-500' : 'text-red-500' }`}
                >
                    { requestDetails?.orderStatus }
                </span>
            </div>

        </main>
        

        <Link
            className="bg-appBgWhite rounded-[6px] py-[8px] w-[200px] px-[35px] ipad:m-auto"
            to={ "/configuration/myRequest" }
        >
            <span className="text-textDark text-[16px] font-medium">Ir a mis pedidos</span>
        </Link>

    </div>
  )
}

export default PaidInfoRequest
