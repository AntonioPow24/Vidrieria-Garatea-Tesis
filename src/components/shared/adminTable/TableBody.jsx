import AdminDashboardTableTR from "../../admin/AdminDashboard/AdminDashboardPart1/AdminDashboardTable/AdminDashboardTableTR";
import ProductTRCard from "../../admin/AdminProducts/principal/main/table/ProductTRCard";
import AdminRequestCardTR from "../../admin/AdminRequest/AdminRequestBody/AdminRequestCard/AdminRequestCardTR";
import UserTRCard from "../../admin/AdminUsers/principal/table/UserTRCard";

const TableBody = ({ tableData, tableName }) => {
    
    return (
      <tbody>
        {
          tableData?.length > 0 ?
  
            tableData.map( tr =>{
              
              if( tableName === 'productsTable' ){
                return <ProductTRCard key={ tr.id } {...tr} />
              } else if (  tableName === 'userTable' ){
                return <UserTRCard key={ tr.id } {...tr} />
              } else if ( tableName === 'requestProductsTable' ){
                return <AdminRequestCardTR key={tr.productId} {...tr} />
              } else if ( tableName === 'dashboardTableProducts' ) {
                return <AdminDashboardTableTR key={tr.id} {...tr} />
              }
            }
            )
          :
          <tr className="w-full ">
            <td colSpan="8" className="text-center py-4">
              <span className='text-adminTextDark dark:text-adminTextWhite transition-all duration-300 text-[16px]'>
                {
                  tableName === 'productsTable' ? 'No hay productos disponibles' : 
                  tableName === 'userTable' ? 'No hay usuarios disponibles' : 
                  'No hay datos disponibles'
                }
              </span>
            </td>
          </tr>
        }
      </tbody>
    )
  }
  
  export default TableBody