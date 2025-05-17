import { productsHeadFields } from "../../../../../../data/tHeadData"
import TableHead from "../../../../../shared/adminTable/TableHead"
import TableBody from "../../../../../shared/adminTable/TableBody"



const ContainerTable = ({ filteredProducts }) => {
    
    return (

    <div className="px-[22px] pb-[22px] overflow-y-auto TbodyScrollingY max-h-[710px]">
        <table className=' w-full'>
            <TableHead headFieldsData={ productsHeadFields } />

            <TableBody tableData={ filteredProducts } tableName={'productsTable'} />

        </table>    
    </div>
  )
}

export default ContainerTable