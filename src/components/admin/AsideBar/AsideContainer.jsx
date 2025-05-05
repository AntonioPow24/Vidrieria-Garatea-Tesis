import AsideLogo from './AsideLogo'
import AsideLinks from './AsideLinks'
import WeatherContainer from './WeatherContainer'
import AsideLogOut from './AsideLogOut'


const AsideContainer = () => {
  return (
    <aside className='flex flex-col bg-adminBgWhite min-h-screen dark:bg-appBgBlack transition-all duration-300 gap-8'>
      
        <AsideLogo />

        <AsideLinks />

        <WeatherContainer />
        
        <AsideLogOut />
    </aside>
  )
}

export default AsideContainer