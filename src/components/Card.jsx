import PropTypes from "prop-types"
import { Link } from "react-router-dom";
export const Card = ({ data,handleLike,scrolled }) => {
    

    return (
        <>
            {
                data.map((recipe) => (
                    <div className={scrolled ? 'card w-80 bg-neutral shadow-xl md:mt-72 mt-40' : 'card w-80 bg-neutral shadow-xl md:mt-20 '} key={recipe.id}>
                        <figure className="w-48 rounded-xl -mt-16 mx-auto"><img src={recipe.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className=" text-2xl text-center text-white font-semibold">
                                {recipe.name}
                            </h2>
                            <p className="text-center my-3">{recipe.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{recipe.category}</div>
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <div className="btn flex " onClick={() => { handleLike(recipe.id) }}>
                                    <i className="fa-regular fa-thumbs-up cursor-pointer text-xl"></i>
                                    <p>{recipe.likes}</p>
                                </div>
                                <Link to={`/detail/${recipe.id}`}>
                                <button className="btn btn-outline btn-error" >
                                    Detail
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }


        </>
    )
}
Card.propTypes = {
    data: PropTypes.any,
    handleLike : PropTypes.func,
    scrolled : PropTypes.any
}
