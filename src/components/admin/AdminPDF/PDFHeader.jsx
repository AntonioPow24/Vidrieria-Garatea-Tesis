
const PDFHeader = ({ orderCode, orderDate, orderTime }) => {
  return (
    <div className="border-b-2 pb-4" style={{ borderColor: "#885efc" }}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <img src="https://i.postimg.cc/cJ15ZVKL/Vidrieria-Garatea-Logo.png" alt="Vidriería Garatea Logo" width={60} height={60} className="rounded-full" />
          <div>
            <h1 className="text-xl font-bold" style={{ color: "#885efc" }}>
              VIDRIERÍA GARATEA
            </h1>
            <p className="text-base font-semibold" style={{ color: "#404040" }}>
              ALUMINIO Y VIDRIO
            </p>
            <p className="text-xs" style={{ color: "#808080" }}>
              Garatea E.I.R.L, 1 Julio 2014
            </p>
          </div>
        </div>

        <div className="text-right">
          <h2 className="text-[14px] font-bold mb-3" style={{ color: "#885efc" }}>
            RESUMEN DE PEDIDO
          </h2>
          <div className="space-y-1 text-xs">
            <div>
              <span style={{ color: "#808080" }}>Número de pedido: </span>
              <span className="font-semibold" style={{ color: "#404040" }}>
                #{orderCode}
              </span>
            </div>
            <div>
              <span style={{ color: "#808080" }}>Fecha de creación del pedido: </span>
              <span className="font-semibold" style={{ color: "#404040" }}>
                {orderDate}
              </span>
            </div>
            <div>
              <span style={{ color: "#808080" }}>Hora de creación del pedido: </span>
              <span className="font-semibold" style={{ color: "#404040" }}>
                {orderTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDFHeader
