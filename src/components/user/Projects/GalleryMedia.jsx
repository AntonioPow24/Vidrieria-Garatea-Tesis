import { projectList } from '../../../data/projectList'
import GalleryPhoto from './GalleryPhoto'

const GalleryMedia = ({ categoryActive }) => {

  const [ objectActive] = projectList.filter( project => project.title === categoryActive )



  return (
    <section className="galleryContainerMax px-[4%] py-[50px]">
        {
          Object.values( objectActive.galery ).map( (imgSrc, index) => 
            <GalleryPhoto  key={ index } imgSrc = { imgSrc } />
          )
        }
    </section>
  )
}

export default GalleryMedia
