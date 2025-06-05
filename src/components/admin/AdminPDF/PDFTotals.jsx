import React from 'react'

const PDFTotals = ({ subTotal, deliveryCost, total }) => {
  const formatPrice = (price) => {
    return `S/. ${price.toFixed(2)}`
  }
  
  return (
    <div className="flex justify-end">
      <div className="w-72 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-base font-bold mb-3" style={{ color: "#885efc" }}>
          RESUMEN DEL PEDIDO
        </h3>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm" style={{ color: "#808080" }}>
              Sub Total:
            </span>
            <span className="font-semibold text-sm" style={{ color: "#404040" }}>
              {formatPrice(subTotal)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm" style={{ color: "#808080" }}>
              Costo de envío:
            </span>
            <span className="font-semibold text-sm" style={{ color: "#404040" }}>
              {formatPrice(deliveryCost)}
            </span>
          </div>

          <hr className="border-gray-300" />

          <div className="flex justify-between items-center">
            <span className="font-bold text-base" style={{ color: "#885efc" }}>
              Total:
            </span>
            <span className="font-bold text-lg" style={{ color: "#885efc" }}>
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDFTotals
