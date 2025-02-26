const GalleryPhoto = ({imgSrc}) => {
  return (

    <div className="w-full">
        <img 
            className="rounded-[10px] "
            src={ imgSrc } 
        />
    </div>
  )
}

export default GalleryPhoto
