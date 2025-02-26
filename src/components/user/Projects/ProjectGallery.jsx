import { useState } from "react"

import GalleryCategory from "./GalleryCategory"
import GalleryMedia from "./GalleryMedia"

const ProjectGallery = () => {

    const [categoryActive, setCategoryActive] = useState('residenciales')

    const categoryFilter = ( category ) => {
        setCategoryActive( category )
    }


  return (
    <section className="pt-[35px] px-[2%] bg-appBgBlack ">

        <GalleryCategory categoryFilter={ categoryFilter } categoryActive={ categoryActive } />

        <GalleryMedia  categoryActive={ categoryActive } />

    </section>
  )
}

export default ProjectGallery
