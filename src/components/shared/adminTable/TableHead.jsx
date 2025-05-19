const TableHead = ({ headFieldsData }) => {


    return (
      <thead className='border-b-2  border-[#A3A3A34F]  sticky top-[-1px] dark:bg-appBgBlack bg-adminBgWhite z-10 transition-all duration-300'>
          <tr className='w-full'>
              {
                  headFieldsData?.map( field => (
                      <th key={ field.id } className={ field.classStyle }>
                          <span className='text-adminTextDark dark:text-adminTextWhite transition-all duration-300 text-[18px] 1500:text-[14px]'>{ field.label }</span>
                      </th>
                  ))
              }
          </tr>
      </thead>
    )
  }
  
  export default TableHead