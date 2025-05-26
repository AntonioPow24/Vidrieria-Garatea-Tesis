
import SearchContainer from '../../AdminUsers/principal/searcher/SearchContainer'
import { useAdminRequestContext } from '../../../../context/AdminRequestContext/AdminRequestContext';
import AdminFilters from './AdminFilters';
import AdminMonthFilter from './AdminMonthFilter';


const optionsToFilter = [
  {id:1, value:"recientes", label:"Más recientes"},
  {id:2, value:"mayorPrecio", label:"Mayor precio"},
  {id:3, value:"menorPrecio", label:"Menor precio"},
  {id:4, value:"antiguos", label:"Más antiguos"},
]

const AdminRequestFilters = () => {

  const { searchQuery, setSearchQuery } = useAdminRequestContext();

  return (
    <div className='flex justify-between'>
      <SearchContainer 
        query={ searchQuery } 
        handleSearch={ e => setSearchQuery(e.target.value) }
        placeholder={ 'Buscar solicitud por nombre o dni' }
      />

      <section className='flex gap-[30px]'>
          <AdminFilters optionsToFilter={optionsToFilter} />
          <AdminMonthFilter />
      </section>
    </div>
  )
}

export default AdminRequestFilters
