
const PDFTable = ({ items, totalProducts }) => {
  const formatPrice = (price) => {
    return `S/. ${price.toFixed(2)}`
  }

  return (
    <div>
      <h3 className="text-base font-bold mb-3" style={{ color: "#885efc" }}>
        PRODUCTOS PEDIDOS
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: "#885efc" }}>
              <th className="border border-gray-300 px-3 py-2 text-left text-white font-semibold text-sm">
                ID del producto
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left text-white font-semibold text-sm">
                Nombre del producto
              </th>
              <th className="border border-gray-300 px-3 py-2 text-center text-white font-semibold text-sm">Precio</th>
              <th className="border border-gray-300 px-3 py-2 text-center text-white font-semibold text-sm">
                Cantidad
              </th>
              <th className="border border-gray-300 px-3 py-2 text-center text-white font-semibold text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border border-gray-300 px-3 py-2 text-sm" style={{ color: "#404040" }}>
                  {item.itemCode}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-sm" style={{ color: "#404040" }}>
                  {item.productName}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center text-sm" style={{ color: "#404040" }}>
                  {formatPrice(item.price)}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center text-sm" style={{ color: "#404040" }}>
                  {item.quantity}
                </td>
                <td
                  className="border border-gray-300 px-3 py-2 text-center font-semibold text-sm"
                  style={{ color: "#404040" }}
                >
                  {formatPrice(item.price * item.quantity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 text-right">
        <p className="text-xs" style={{ color: "#808080" }}>
          Total de productos:{" "}
          <span className="font-semibold" style={{ color: "#404040" }}>
            {totalProducts}
          </span>
        </p>
      </div>
    </div>
  )
}

export default PDFTable
