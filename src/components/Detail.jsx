import { Footer } from "./Footer"
import { Navigation } from "./Navgation"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { useState } from "react"
import { useParams } from "react-router-dom"
// import soto from "../assets/img/soto.jpg"
export const Detail = ({ recipeData, handleLike }) => {
    const [scrolled, setScrolled] = useState(false)
    const {recipeId} = useParams()
    const detailRecipe = recipeData.find(data => data.id == parseInt(recipeId));

    if(!detailRecipe){
        return <p>loading</p>
    }
    return (
        <>
            <section id="detail" className="mb-28" >
                <Navigation categoryTitle={detailRecipe.name} recipe={recipeData} setScrolled={setScrolled} scrolled={scrolled} />
                <div className={ "md:flex md:items-center md:justify-around "}>
                <div className={scrolled ? "md:mt-72 md:pt-0 pt-72" : ""}>
                    <div className="card w-80 bg-neutral shadow-xl mx-auto">
                        <figure className="w-48 rounded-xl -mt-16 mx-auto"><img src={detailRecipe.image} alt={detailRecipe.name} /></figure>
                        <div className="card-body">
                            <h2 className=" text-2xl text-center text-white font-semibold">
                                {detailRecipe.name}
                            </h2>
                            <p>{detailRecipe.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{detailRecipe.category}</div>
                            </div>
                            <div className="flex justify-start items-center mt-5" onClick={() => handleLike(detailRecipe.id)}>
                                <div className="btn flex ">
                                    <i className="fa-regular fa-thumbs-up cursor-pointer text-xl"></i>
                                    <p>{detailRecipe.likes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={'/recipe'} className="md:block hidden">
                    <button className="btn mt-5 btn-neutral"> Kembali</button>
                </Link>
                </div>
                    <div className={scrolled ? "md:mt-72 mt-28 " : ""}>
                        <div role="tablist" className="tabs tabs-lifted p-6 md:p-0">
                            <input type="radio" name="my_tabs_2" role="tab" className="tab text-white" aria-label="Ingredients" checked  />
                            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 md:w-auto w-80 ">
                                <div className="card w-96 h-72 overflow-y-auto ">
                                    <div className="card-body">
                                            <ul className="list-disc">
                                        {detailRecipe.ingredients.map((ingredients, index) => (
                                                <li key={index}>{ingredients}</li>

                                        ))}
                                            </ul>

                                    </div>
                                </div>
                            </div>
                            <input type="radio" name="my_tabs_2" role="tab" className="tab text-white" aria-label="Steps" />
                            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  md:w-auto w-80">
                                <div className="card w-96 h-72 overflow-y-auto">
                                    <div className="card-body">
                                        <ul className="list-decimal list-inside">
                                        {detailRecipe.instructions.map((instructions, index) => (
                                                <li key={index} className="leading-loose whitespace-normal">{instructions}</li>

                                        ))}
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
                
            </section>
            <Footer />

        </>
    )
}
Detail.propTypes = {
    recipeData: PropTypes.any,
    handleLike: PropTypes.func
}