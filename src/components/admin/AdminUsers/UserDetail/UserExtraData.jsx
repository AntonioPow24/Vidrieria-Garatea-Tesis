import React from 'react'
import { useAdminUsersContext } from '../../../../context/AdminUsersContext/AdminUsersContext'
import SmallLoader from '../../../shared/AdminLoaders/SmallLoader'

const UserExtraData = ({ totalBuy, roles }) => {
  const { loadingSelectedUser } = useAdminUsersContext()
  const rol = roles ? roles[0] : 'Sin rol'

  // Array dinámico para los datos
  const extraDataArray = [
    { id: 1, label: 'Total comprado', value: `S/. ${totalBuy}`,valueClass: 'text-adminTextWhite', align: 'items-start' },
    { id: 2, label: 'Rol', value: rol, valueClass: 'text-skyBlueApp', align: 'items-end' },
  ]

  return (
    <section className="flex w-full max-w-[430px] mx-auto gap-4">
      {extraDataArray.map(({ id, label, value, valueClass, align }) => (
        <div
          key={id}
          className={`flex-1 flex flex-col justify-center items-center h-[96px]  ${align}  bg-userDetailBg rounded-[14px] px-[14px] py-[18px] gap-3`}
        >
          {loadingSelectedUser ? (
            <SmallLoader message="Cargando" />
          ) : (
            <>
              <span className={`text-[14px] ${valueClass}`}>{label}</span>
              <span className={`text-[20px] font-bold leading-snug ${valueClass && valueClass}`}>{value === "user" ? "Usuario" : value === "admin" ? "Administrador" : value }</span>
            </>
          )}
        </div>
      ))}
    </section>
  )
}

export default UserExtraData