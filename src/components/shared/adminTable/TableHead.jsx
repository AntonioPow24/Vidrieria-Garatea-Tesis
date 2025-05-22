const TableHead = ({ headFieldsData }) => {


    return (
      <thead className='sticky top-[-1px] dark:bg-appBgBlack bg-adminBgWhite z-10 transition-all duration-300'>
          <tr className='w-full'>
              {
                  headFieldsData?.map( field => (
                      <th key={ field.id } className={ field.classStyle }>
                          <span className=''>{ field.label }</span>
                      </th>
                  ))
              }
          </tr>
      </thead>
    )
  }
  
  export default TableHead