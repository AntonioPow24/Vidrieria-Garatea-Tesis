import React from 'react'
import { useAdminUsersContext } from '../../../../context/AdminUsersContext/AdminUsersContext'

const UserExtraData = ({ totalBuy, ROLES }) => {
  const { loadingSelectedUser } = useAdminUsersContext()
  const rol = ROLES ? ROLES[0] : 'Sin rol'

  // Array dinámico para los datos
  const extraDataArray = [
    { id: 1, label: 'Total comprado', value: `S/. ${totalBuy}`, valueClass: 'text-white', align: 'items-start' },
    { id: 2, label: 'Rol', value: rol, valueClass: 'text-sky-400', align: 'items-end' },
  ]

  return (
    <section className="flex w-full max-w-[430px] mx-auto gap-4">
      {extraDataArray.map(({ id, label, value, valueClass, align }) => (
        <div
          key={id}
          className={`flex flex-col justify-center items-center ${align} w-1/2 h-[100px] bg-userDetailBg rounded-[14px] px-5 py-3`}
        >
          {loadingSelectedUser ? (
            <div className="flex justify-center items-center gap-3 w-full">
              <span className="text-adminTextWhite">Cargando data</span>
              <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <span className={`text-[12px] text-adminTextWhite ${valueClass}`}>{label}</span>
              <span className={`text-[1.8rem] font-bold leading-snug ${valueClass}`}>{value}</span>
            </>
          )}
        </div>
      ))}
    </section>
  )
}

export default UserExtraData