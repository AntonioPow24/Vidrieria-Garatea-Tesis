import { useRef, useState } from "react";

const HomeCarousel = ({ projectList }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const thumbnailRef = useRef(null);

    //Funciones
    const moveSlider = (direction) => {
        const thumbnailItems = thumbnailRef.current.children;

        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projectList.length);
            thumbnailRef.current.appendChild(thumbnailItems[0]);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectList.length - 1 : prevIndex - 1));
            thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
        }
    };

    //Estilos para el maquetado

    const buttonArrowStyle =' buttonArrow w-[50px] h-[50px] rounded-[50%] bg-popUpDropDown border-none cursor-pointer transition-all duration-300 hover:bg-skyBlueApp hover:text-text-white z-[4]'

  return (
    <section>
        <div className="slider w-full h-[600px] bigPhone:h-[480px] relative overflow-hidden">

            <div className="list">
                {
                    Array.isArray(projectList) && projectList.map( project =>
                        <div 
                            className={` projectItem w-full h-full absolute inset-0 ${project.id === (currentIndex + 1) ? 'block' : 'hidden'}`}
                            key={project.id}
                        >
                            <img 
                                src={project.img} 
                                alt={project.title}
                                className='w-full h-full  object-cover '
                            />

                            <div className="content absolute top-0 left-0 w-full  text-center z-10">
                                <div className="description  text-6xl 685:text-3xl  pt-7 text-text-white">
                                    <span className='capitalize'>{project.title}</span>
                                </div>

                            </div>
                        </div>



                    )
                }
            </div>

            <div 
                className="thumbnail flex gap-[20px] absolute bottom-[50px] left-[50%] w-[max-content] z-[1] transition-all duration-300" 
                ref={thumbnailRef}
            >
                {
                    projectList && projectList.map( project  => 
                        <div 
                            className="thumbItem w-[150px] h-[220px] bigPhone:h-[180px] bigPhone:w-[120px] shrink-0 relative rounded-[20px] overflow-hidden"
                            key={project.id}
                        >
                            <img 
                                src={project.img} 
                                alt={project.title}
                                className='w-full h-full object-cover ' 
                            />
                        </div>
                    )
                }
            </div>

            <div className="arrows absolute top-[80%] right-[52%] 685:right-[40%] bigPhone:left-5   w-[300px]  flex gap-[40px] items-center">

                <button 
                    className={`prev ${buttonArrowStyle}`}
                    onClick={() => moveSlider('prev')}
                >
                    <i className="fa-solid fa-chevron-left text-2xl text-text-white"></i>
                </button>

                <button 
                    className={`next ${buttonArrowStyle}`}
                    onClick={() => moveSlider('next')}
                >
                    <i className="fa-solid fa-chevron-right text-2xl text-text-white"></i>
                </button>

            </div>

        </div>
    </section>
  )
}

export default HomeCarousel
