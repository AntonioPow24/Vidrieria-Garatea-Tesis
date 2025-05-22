import { useState } from "react"
import Modal from "../../shared/Modal"

const GalleryPhoto = ({imgSrc}) => {
  const [showModal, setShowModal] = useState(false)

  const showModalImg = () => {
    setShowModal(!showModal)
  }



  return (

    <div 
      className="w-full cursor-pointer relative showViewMessage" 
      onClick={showModalImg}
    >
        <div
          className={ 'hidden message'}
        >
          Ver Imagen
        </div>
        <img 
            className="rounded-[10px] w-full object-cover h-full"
            src={ imgSrc } 
        />
        {
          showModal && 
          <div className="w-full h-full top-0 left-0 fixed z-[200]">
            <Modal
              isModal={ showModal }
              toggleModal={ showModalImg }
              anotherClass="flex justify-center items-center"
            >
              <div className="flex justify-center items-center overflow-hidden rounded-[10px] z-[200]">
                  <img 
                      className="rounded-[10px] object-fill max-w-[80%] max-h-[80%] w-full"
                      src={ imgSrc }
                      onClick={(e) => e.stopPropagation()} 
                  />
              </div>
            </Modal>
          </div>
        }
    </div>
  )
}

export default GalleryPhoto
