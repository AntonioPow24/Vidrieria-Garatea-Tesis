import { Phone, Globe, MapPin } from "lucide-react"


const PDFFooter = () => {
  return (
    <div className="border-t-2 pt-3 mt-4" style={{ borderColor: "#885efc", backgroundColor: "#885efc" }}>
      <div className="text-center text-white p-3 rounded-lg" style={{ backgroundColor: "#885efc" }}>
        <h3 className="text-sm font-bold mb-2">VIDRIERÍA GARATEA</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <div className="flex items-center justify-center gap-1">
            <Phone size={12} className="text-white" />
            <span>+51 928517790</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <Globe size={12} className="text-white" />
            <span>vidrieriagaratea.netlify.com</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <MapPin size={12} className="text-white" />
            <span>Av. Agraria, 2323 Garatea - Nuevo Chimbote</span>
          </div>
        </div>

        <div className="mt-2 pt-2 border-t border-white/30">
          <p className="text-xs opacity-90">© 2024 Vidriería Garatea E.I.R.L.</p>
        </div>
      </div>
    </div>
  )
}

export default PDFFooter
