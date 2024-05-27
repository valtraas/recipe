import { Link } from "react-router-dom"
import { Popular } from "./Popular"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect";
import headerImg from "/img/header.jpg";

export const Header = ({ recipeData }) => {
    
   
    return (
        <section id="header" className="p-6 ">
            <div className="flex justify-between p-2">
                <p className="uppercase text-2xl font-bold text-white">Get <span className="text-error">Recipe</span></p>
                <Link to={'/login'}>

                    <button className="btn btn-md btn-outline btn-error">Login</button>
                </Link>
            </div>
            <div className="md:flex md:justify-around md:items-center p-6">
                <div className="md:w-1/2 p-6 leading-loose">
                    <div className="text-white mb-5">
                        <p className="md:text-2xl text-xl font-semibold  my-2"> Embark on a Culinary Journey and Discover Deliciousness in Every Dish</p>
                        <div className="md:text-4xl text-3xl text-error font-bold" >
                            <Typewriter 
                            options={{ 
                                strings : ["Comprehensive", "Delicious", "Exciting"],
                                autoStart: true,
                                loop : true
                             }}
                            />
                        </div>
                    </div>
                    <Link to={'/recipe'}>

                        <button className="btn btn-outline btn-error ">Get Started</button>
                    </Link>
                </div>
                <div className="md:block hidden" >
                    <img src={headerImg} className="mask mask-circle max-w-96" />
                </div>
            </div>
            <div className="text-white">
                <Popular data={recipeData} />
            </div>
        </section>
    )
}

Header.propTypes = {
    recipeData: PropTypes.any
}