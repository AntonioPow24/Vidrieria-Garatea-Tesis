import { useAuth } from '../../context/UserContext'
import { Navigate, useParams } from 'react-router-dom'
import HeaderConfig from '../../components/user/profile/containers/HeaderConfig'
import ConfigMainContainer from '../../components/user/profile/containers/ConfigMainContainer'
import RequestContainer from '../../components/user/profile/request/RequestContainer'

const validPaths = ['myProfile', 'myRequest'];


const ConfigurationProfile = () => {
    const { user } = useAuth()

    const { typeConfig } = useParams()

    if (!validPaths.includes(typeConfig)) {
      return <Navigate to="/404" />;
  }


    return (
      <section className=''>

        {
          user ?
          
  
            <>
              <HeaderConfig titleHeader={typeConfig === 'myProfile'?  'Configuración y privacidad' : 'Mis pedidos'} />
        
              {
                typeConfig === 'myProfile'? 
                  <ConfigMainContainer /> : <RequestContainer /> 
              }             
            </>

          :
            <Navigate to={'/'} />
        }



      </section>
    )
}

export default ConfigurationProfile
