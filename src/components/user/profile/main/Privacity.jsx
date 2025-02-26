import TitleSectionConfig from "../containers/TitleSectionConfig"
import PasswordChangeForm from "./PasswordChangeForm"


const Privacity = () => {



  return (
    <section className='flex flex-col gap-[20px]' >
      
      <TitleSectionConfig title={ 'Privacidad de la cuenta' } />
      
      <PasswordChangeForm />

    </section>
  )
}

export default Privacity