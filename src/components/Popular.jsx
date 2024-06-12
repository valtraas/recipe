import { useEffect, useState } from "react";
import { FaSmileBeam } from "react-icons/fa";
import { Caraousel } from "./Carousel";
import PropTypes from "prop-types"
export const Popular = ({ recipeData }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  if (!recipeData) {
    return <>
      <div className="flex flex-col gap-4 w-52 mx-auto">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  }
  const popularRecipe = [...recipeData].sort((a, b) => b.likes - a.likes).slice(0, 3);

  return (
    <>
      <section id="popular" className="mt-64">
        <div className="mb-20">

          <p className="text-center  text-primary font-semibold text-4xl ">Popular</p>
        </div>
        {isMobile ? (
          <Caraousel data={popularRecipe} />
        ) : (
          <div className="flex flex-wrap items-center justify-center p-4 gap-7">
            {popularRecipe.map((item) => (
              <div className="card w-80 bg-base-100 shadow-xl h-80 hover:bg-primary group duration-700" key={item.id}>
                <figure className="w-48 rounded-xl -mt-16 mx-auto"><img src={item.image} alt={item.name} /></figure>
                <div className="card-body">

                  <h2 className="text-center text-xl font-semibold group-hover:text-white text-primary duration-300">{item.name}</h2>
                  <p className="my-5 group-hover:text-white duration-300">{item.description}</p>
                  <div className="card-actions justify-center">
                    <button className="px-4 py-2 flex items-center border rounded-md gap-2 group-hover:bg-white duration-300 cursor-default border-primary"><FaSmileBeam className="text-xl text-primary" /> {item.likes}</button>
                  </div>
                </div>
              </div>
            ))}


          </div>
        )}
      </section>
    </>
  )
}
Popular.propTypes = {
  recipeData: PropTypes.any
}