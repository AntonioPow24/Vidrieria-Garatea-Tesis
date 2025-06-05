import { User, Phone, MapPin, CreditCard } from "lucide-react"

const PDFClientData = ({clientData}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-base font-bold mb-3 flex items-center gap-2" style={{ color: "#885efc" }}>
        PEDIDO PARA:
      </h3>

      <div className="flex gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User size={14} style={{ color: "#404040" }} />
            <div>
              <p className="font-semibold text-sm" style={{ color: "#404040" }}>
                {clientData.clientName} {clientData.clientLastName}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <User size={14} style={{ color: "#404040" }} />
            <div>
              <p className="text-xs" style={{ color: "#808080" }}>
                {clientData.clientEmail}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={14} style={{ color: "#404040" }} />
            <p className="text-sm" style={{ color: "#404040" }}>
              {clientData.clientPhone}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CreditCard size={14} style={{ color: "#404040" }} />
            <p className="text-sm" style={{ color: "#404040" }}>
              {clientData.clientDocumentNumber}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} style={{ color: "#404040" }} />
            <p className="text-sm" style={{ color: "#404040" }}>
              {clientData.clientAddress}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t">
        <p className="text-xs" style={{ color: "#808080" }}>
          <span>Código del usuario: </span>
          <span className="font-mono" style={{ color: "#404040" }}>
            {clientData.clientCode}
          </span>
        </p>
      </div>
    </div>
  )
}

export default PDFClientData
