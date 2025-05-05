import { projectList } from '../../../data/projectList'
import GalleryPhoto from './GalleryPhoto'

const GalleryMedia = ({ categoryActive }) => {

  const [ objectActive] = projectList.filter( project => project.title === categoryActive )



  return (
    <section className="galleryContainerMax px-[4%] py-[50px] max-w-full  455:flex 455:flex-col 455:justify-center 455:items-center 455:px-[10px]">
        {
          Object.values( objectActive.galery ).map( (imgSrc, index) => 
            <GalleryPhoto  key={ index } imgSrc = { imgSrc } />
          )
        }
    </section>
  )
}

export default GalleryMedia
