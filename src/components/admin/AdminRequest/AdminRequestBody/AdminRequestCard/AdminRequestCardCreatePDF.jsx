import { useState } from "react";
import { buildRequestPDFPayload } from "../../../../../utils/buildRequestPDFPayload";
import { Download, FileText } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import PDFSummary from "../../../AdminPDF/PDFSummary";
import "jspdf-autotable"

const AdminRequestCardCreatePDF = ({request, users, products}) => {
    const [isGenerating, setIsGenerating] = useState(false)
    const payload = buildRequestPDFPayload(request, users, products);

  const generatePDF = async () => {
    setIsGenerating(true)

    try {
      const element = document.getElementById("pdf-content")
      if (!element) return

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "A4")

      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save(`pedido-${payload.orderCode}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className='flex w-full'>
        <button 
            className='transition-all duration-300 bg-[#e7e7e7] dark:bg-[#303030] text-adminTextDark dark:text-adminTextWhite rounded-[4px] py-2 text-[14px] hover:bg-[#d7d7d7] dark:hover:bg-[#404040] w-full flex items-center gap-[10px] justify-center'
            onClick={generatePDF}
        >
          {isGenerating ? (
            <>
              <FileText className="w-4 h-4 mr-2 animate-spin" />
              Generando PDF...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Generar PDF
            </>
          )}
        </button>

        <div style={{ position: "absolute", left: "-99999px", top: "-99999px" , width: "794px" }}>
            <PDFSummary payload={payload} />
        </div>
    </div>
  )
}

export default AdminRequestCardCreatePDF
