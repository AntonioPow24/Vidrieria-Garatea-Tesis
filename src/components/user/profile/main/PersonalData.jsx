import React, { useEffect, useState } from 'react'


import LoadingSpinner from '../../../shared/LoadingSpinner'
import TitleSectionConfig from '../containers/TitleSectionConfig'
import InputConfig from './InputConfig'
import { useAuth } from '../../../../context/UserContext'
import useUpdateUser from '../../../../hooks/ProfileHooks/useUpdateUser'
import LineMessage from '../../../shared/LineMessage'

const PersonalData = () => {

    const { user } = useAuth(); // Obtener el usuario actual del contexto
    const { updateUser, hasEmptyFields, loading, error, success } = useUpdateUser();
  
    const [updateUserState, setUpdateUserState] = useState({
      userName: user?.userName || "",
      lastName: user?.lastName || "",
      address: user?.address || "",
      email: user?.email || "",
    });

    const [isChanged, setIsChanged] = useState(false);

    // Comparar `updateUserState` con los datos actuales del usuario
    useEffect(() => {
        const hasChanges = Object.keys(updateUserState).some(
            (key) => updateUserState[key] !== user[key])

        setIsChanged(hasChanges);
    }, [updateUserState, user]);

    // Functions
    const onChangeUpdateuser = (e) => {
      const { value, name } = e.target
      setUpdateUserState( prev => ({...prev, [name]: value}) )
    }
  
  
    const handleSubmit = async () => {


        if ( hasEmptyFields( updateUserState ) ) return

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(updateUserState.email)) {
          alert("Por favor, ingresa un correo electrónico válido.");
          return;
        }


        await updateUser( updateUserState )
    }

    const inputArray = [
        {
          id: "userName",
          label: "Nombre:",
          type: "text",
          name: "userName",
          value: updateUserState.userName,
          onChange: onChangeUpdateuser,
          required:true
        },
        {
          id: "lastName",
          label: "Apellidos:",
          type: "text",
          name: "lastName",
          value: updateUserState.lastName,
          onChange: onChangeUpdateuser,
          required:true
        },
        {
          id: "address",
          label: "Dirección:",
          type: "text",
          name: "address",
          value: updateUserState.address,
          onChange: onChangeUpdateuser,
          required: false
        },
        {
          id: "email",
          label: "Correo electrónico:",
          type: "email",
          name: "email",
          style: "max-w-[805px]",
          value: updateUserState.email,
          onChange: onChangeUpdateuser,
          required:true
        },
      ];




  return (
    <section className='flex flex-col gap-[20px] mb-5 pr-[200px] 1570:pr-[1%]'>

    <TitleSectionConfig title={'Datos personales'} />

      <div className="flex flex-wrap gap-[70px] justify-between">

        { inputArray.map( input => 

          <InputConfig  
            {...input} 
            key={ input.id }
            onChange={ onChangeUpdateuser }
          />
           
        )}

      </div>

      <div className="flex justify-center ">
        <button
            className={`${!isChanged || hasEmptyFields(updateUserState) ? 'bg-gray-400' : 'bg-skyBlueApp hover:bg-[#5dc7e7]' } py-[12px] rounded-[10px] px-[10px] flex gap-4 items-center mt-6 transition-all     duration-300 w-[245px] h-[55px] justify-center`}
            disabled={!isChanged || loading || hasEmptyFields(updateUserState )}
            onClick={ handleSubmit }
        >
          {loading ? (
            <>
              <span className="text-xl font-medium text-textDark">
                Guardando cambios
              </span>
              <LoadingSpinner sizeSpinner={"20"} />
            </>
          ) : (
            <>
              <span className="text-xl font-medium text-textDark">
                Guardar cambios
              </span>
              <i className="fa-solid fa-floppy-disk text-textDark text-xl pt-1"></i>
            </>
          )}
        </button>
      </div>

      {error && (
        <LineMessage
          message={ error }
          type={"error"}
          style={"text-center"}
        />
      )}

      {success && (
        <LineMessage
          message={ 'Cambios realizados' }
          type={"success"}
          style={"text-center"}
        />
      )}



    </section>

  )
}

export default PersonalData