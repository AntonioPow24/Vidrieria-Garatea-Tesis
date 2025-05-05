import HeaderBar from "../../components/shared/adminSimple/HeaderBar"
import ProductsAdminContainer from "../../components/admin/AdminProducts/principal/ProductsAdminContainer"

const ProductsAdmin = () => {
  return (
    <section className='max-h-[100dvh] h-[100dvh] flex flex-col overflow-hidden'>
      <HeaderBar titleSection={'Productos'} quantity={96} />

      <ProductsAdminContainer />

    </section>
  )
}

export default ProductsAdmin