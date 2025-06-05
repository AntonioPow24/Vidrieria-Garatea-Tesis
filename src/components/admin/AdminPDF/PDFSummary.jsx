import React from 'react'
import PDFHeader from './PDFHeader'
import PDFClientData from './PDFClientData'
import PDFTable from './PDFTable'
import PDFTotals from './PDFTotals'
import PDFFooter from './PDFFooter'

const PDFSummary = ({payload}) => {
  return (
    <div
      id="pdf-content"
      className="bg-white max-w-4xl mx-auto flex flex-col"
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "297mm",
        padding: "20mm 15mm",
      }}
    >
      <div className="flex-grow">
        <PDFHeader 
          orderCode={payload.orderCode} 
          orderDate={payload.orderDetailData.orderDate}
          orderTime={payload.orderDetailData.orderTime} 
        />

        <div className="mt-6">
          <PDFClientData 
            clientData={payload.clientData} 
          />
        </div>

        <div className="mt-6">
          <PDFTable 
            items={payload.productsData.items} 
            totalProducts={payload.productsData.totalProducts} 
          />
        </div>

        <div className="mt-4">
          <PDFTotals
            subTotal={payload.productsData.subTotalOrder}
            deliveryCost={payload.orderDetailData.delivery.deliveryCost}
            total={payload.productsData.totalOrder}
          />
        </div>
      </div>

      <div className="mt-auto">
        <PDFFooter />
      </div>
    </div>
  )
}

export default PDFSummary
