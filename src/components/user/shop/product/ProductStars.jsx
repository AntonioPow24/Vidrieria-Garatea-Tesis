import React from 'react'

const ProductStars = ({ valorization, color1, color2 }) => {

    // Funcion que me permite saber cuantas estrellas estaran pintadas
    const getStars = (valorization) => {
        switch (true) {
          case valorization > 0 && valorization <= 3:
            return 1;
          case valorization >= 4 && valorization <= 7:
            return 2;
          case valorization >= 8 && valorization <= 12:
            return 3;
          case valorization >= 13 && valorization <= 20:
            return 4;
          case valorization > 20:
            return 5;
          default:
            return 0;
        }
      };


      const filledStars = getStars( valorization )

  return (
    <section className='flex gap-[3px]'>
    {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${index < filledStars ? color1 : color2}`}
        ></i>
    ))}
    </section>
  )
}

export default ProductStars
