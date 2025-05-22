import Select from 'react-select'
import { useAdminRequestContext } from '../../../../context/AdminRequestContext/AdminRequestContext';
import OrderListIcon from '../../../icons/OrderListIcon';
import CheckListIcon from '../../../icons/CheckListIcon';
import { useDarkThemeContext } from '../../../../context/DarkThemeContext';



const AdminFilters = ({optionsToFilter}) => {
    
    const {setOrderType, orderType} = useAdminRequestContext()
    const { darkTheme } = useDarkThemeContext();

    const customStyles = {
        control: (base) => ({
            ...base,
            backgroundColor: darkTheme ? '#232323' : "#f5f5f5",
            border: 'none',
            borderRadius: '6px',
            boxShadow: 'none',
            padding: '0 10px',
            width: "170px",
            display: 'flex',
            justifyContent: 'center',
            transition: 'all 0.3s ease ',
            height: '100%',
            zIndex: 30,
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? '#6445BC' : darkTheme ? '#232323' : "#f5f5f5",
            color: state.isSelected ? '#fff' : darkTheme ? "#b8b7b7" : '#404040',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '10px 12px',
            transition: 'all 0.3s ease',
            zIndex: 30,
            
        }),
        singleValue: (base) => ({
            ...base,
            color: darkTheme ? "#b8b7b7" : '#404040' ,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
        }),
        indicatorSeparator: () => ({ display: 'none' }),
        dropdownIndicator: (base) => ({
            ...base,
            color: '#333',
        
        }),
         menu: (base) => ({
        ...base,
        backgroundColor: darkTheme ? '#232323' : '#f5f5f5',
        border: 'none',
        boxShadow: 'none',
        borderRadius: '6px',
        marginTop: '6px',
        transition: 'all 0.3s ease',
        zIndex: 30,
  }),
    };
    const DropdownIndicator = () => null;
    
  return (
    <>
      <Select 
        options={optionsToFilter}
        defaultValue={optionsToFilter[0]}
        styles={customStyles}
        onChange={option => setOrderType(option.value)}
        formatOptionLabel={(option, { context }) => {
            if (context === 'menu') {
                const isSelected = orderType === option.value;
                return (
                <div className="flex justify-between items-center w-full">
                    {option.label}
                    {isSelected && <CheckListIcon />}
                </div>
                );
            }
            if (context === 'value') {
                return (
                <div className="flex items-center gap-2">
                    <span>{option.label}</span>
                    <OrderListIcon />
                </div>
                );
            }
        }}
        components={{DropdownIndicator}}
      />
    </>
  )
}

export default AdminFilters
