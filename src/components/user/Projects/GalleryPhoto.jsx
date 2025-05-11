const GalleryPhoto = ({imgSrc}) => {
  return (

    <div className="455:max-w-[280px] 455:m-auto w-full">
        <img 
            className="rounded-[10px] w-full object-cover h-full"
            src={ imgSrc } 
        />
    </div>
  )
}

export default GalleryPhoto
