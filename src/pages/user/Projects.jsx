import ProjectGallery from '../../components/user/Projects/ProjectGallery'
import ProjectHeaders from '../../components/user/Projects/ProjectHeaders'


import '../../styles/user/projects/projects.css'

const Projects = () => {
  return (
    <section className=''>

      <header className='px-[2%] bgImage '>
        <ProjectHeaders />
      </header>


      <ProjectGallery />




    </section>
  )
}

export default Projects
