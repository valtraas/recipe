import { FaSmileBeam } from "react-icons/fa"
import { Caraousel } from "./Carousel";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
export const Recipes = ({ recipeData }) => {
   
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
if(!recipeData){
    return <>
    <div className="flex flex-col gap-4 w-52 mx-auto">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  </>
}
    return (
        <>
            <section id="recipe" className="mt-44 md:mb-72 mb-96">
                <div className="mb-20">

                    <p className="text-center  text-primary font-semibold text-4xl ">Recipe</p>
                </div>
                {isMobile ? (
                    <>

                        <Caraousel data={recipeData.slice(0,6)} />
                        <div className="flex justify-center items-center mt-20">
                            <button className="px-10 py-5 border-primary border rounded-md terxt-primary hover:bg-primary text-xl hover:text-white duration-500 hover:font-semibold">More Recipes</button>
                        </div>
                    </>

                ) : (
                    <>

                        <div className="flex flex-wrap items-center justify-center p-4 gap-7">
                            {recipeData.slice(0,6).map((item) => (
                                <div className="card w-80 bg-base-100 shadow-xl h-80 hover:bg-primary group duration-700 mb-28" key={item.id}>
                                    <figure className="w-48 rounded-xl -mt-16 mx-auto"><img src={item.image} alt={item.name} /></figure>
                                    <div className="card-body">
                                        <h2 className="text-center text-xl font-semibold group-hover:text-white text-primary duration-300 underline">
                                            <Link to={`detail/${item.slug}`}>
                                                {item.name}
                                            </Link>
                                        </h2>
                                        <p className="my-5 group-hover:text-white duration-300">{item.description}</p>
                                        <div className="card-actions justify-center">
                                            <button className="px-4 py-2 rounded-md group-hover:bg-white flex border items-center gap-2 duration-300 cursor-default border-primary"><FaSmileBeam className="text-xl text-primary" /> {item.likes}</button>
                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>
                        <div className="flex justify-center items-center mt-20">
                            <button className="px-10 py-5 border-primary border rounded-md terxt-primary hover:bg-primary text-xl hover:text-white duration-500 hover:font-semibold">
                                <Link to={'recipes'}>
                                    More Recipe
                                </Link>
                            </button>
                        </div>
                    </>
                )}
            </section>
        </>
    )
}
Recipes.propTypes = {
    recipeData: PropTypes.any
}