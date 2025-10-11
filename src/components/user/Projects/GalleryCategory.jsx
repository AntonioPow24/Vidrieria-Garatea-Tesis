import { projectList } from "../../../data/projectList"

const GalleryCategory = ({categoryFilter, categoryActive}) => {

    const changeCategory = ( category ) => {
        categoryFilter( category )
    }

  return (
    <div className="flex gap-5 justify-center flex-wrap">   
        {
            projectList?.map( project => 
                <button
                    key={project.id}
                    className={` max-w-[333px] w-full 722:max-w-[220px] py-[11px] 722:py-[8px] rounded-[10px] border border-[#4d4d4d] ${project.title === categoryActive? 'bg-[#54BFE17D]' : 'bg-projectBg'} `}
                    onClick={ () => changeCategory( project.title ) }
                >
                    <span className={`text-2xl 722:text-[18px] capitalize ${project.title === categoryActive ? 'text-text-white': 'text-skyBlueApp'} `}>{project.title}</span>
                </button>

                
            )
        }
    </div>
  )
}

export default GalleryCategory
