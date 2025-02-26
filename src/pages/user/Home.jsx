import HomeCarousel from "../../components/user/homePage/HomeCarousel"
import HomeCities from "../../components/user/homePage/HomeCities"
import HomeHeader from "../../components/user/homePage/HomeHeader"
import HomeMarketingCards from "../../components/user/homePage/HomeMarketingCards"
import HomeServices from "../../components/user/homePage/HomeServices"

import '../../styles/user/home.css'

import { projectList } from '../../data/projectList'

const Home = () => {
  return (
    <section className='bg-appBgBlack pb-[97px]'>
      <HomeHeader />

      <HomeMarketingCards />

      <HomeCities/> 
 
      <HomeServices />

      <HomeCarousel projectList={ projectList } />
    </section>
  )
}

export default Home
