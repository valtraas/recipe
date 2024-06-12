import { FaSmileBeam } from "react-icons/fa"
import { Navigation } from "./Navgation"
import { Footer } from "./Footer"
import { IoArrowBackCircleSharp } from "react-icons/io5"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { HashLoader } from "react-spinners"
export const DetailRecipe = ({ data, handleLike }) => {
    const param = useParams()
    const detailRecipe = data.find(data => data.slug == param.slug);
    if (!detailRecipe) {
        return <>
            <div className="flex items-center justify-center h-screen">
                <HashLoader color="#F8BB20" size={80} />
            </div>
        </>
    }
    return (
        <>
            <Navigation />
            <div style={{ backgroundImage: `url(${detailRecipe.image})` }} className="h-[870px] -mt-72 md:bg-contain bg-cover bg-no-repeat bg-center  flex items-center justify-center  ">
            <p className="text-primary text-5xl font-bold  backdrop-blur-md px-4 py-2 rounded-md"> {detailRecipe.name}</p>
            </div>
            <div className="shadow-inner md:rounded-t-[20%] rounded-t-[10%]  -mt-56 bg-white  mx-auto pt-32 relative mb-44">

                <svg width="260" height="160" viewBox="0 0 272 507" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 md:inset-y-[800px] top-96">
                    <ellipse cx="252" cy="253.5" rx="252" ry="253.5" fill="#F8BB20" />
                </svg>


                <svg width="81" height="81" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute md:left-96 inset-y-[800px]">
                    <circle cx="148" cy="148" r="148" fill="#F8BB20" />
                </svg>
                <svg width="261" height="261" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute md:left-96 top-72">
                    <circle cx="148" cy="148" r="148" fill="#F8BB20" />
                </svg>
                <svg width="71" height="71" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-20 top-72">
                    <circle cx="148" cy="148" r="148" fill="#F8BB20" />
                </svg>


                <div className=" p-4  mt-20 ">

                    <div className="card w-80 bg-base-100 shadow-xl h-80 hover:bg-primary group duration-700 mb-20 mx-auto" >
                        <figure className="w-48 rounded-xl -mt-16 mx-auto"><img src={detailRecipe.image} alt={detailRecipe.name} /></figure>
                        <div className="card-body">

                            <h2 className="text-center text-xl font-semibold group-hover:text-white text-primary duration-300">{detailRecipe.name}</h2>
                            <p className="my-5 group-hover:text-white duration-300">{detailRecipe.description}</p>
                            <div className="card-actions justify-center">
                                <button className=" px-4 py-2 flex items-center border rounded-md gap-2 group-hover:bg-white duration-300 cursor-pointer border-primary" onClick={() => handleLike(detailRecipe.slug)}><FaSmileBeam className="text-xl text-primary" /> {detailRecipe.likes}</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex items-center justify-evenly flex-wrap">
                    <div className="card w-80 h-96 bg-base-100 shadow-xl  hover:bg-primary group duration-700 mb-20 mx-auto overflow-auto" >
                        <div className="card-body">
                            <h2 className="text-center text-xl font-semibold group-hover:text-white text-primary duration-300">Ingredients</h2>
                            <ul className="my-5 group-hover:text-white duration-300 list-disc">
                                {
                                    detailRecipe.ingredients.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>

                        </div>
                    </div>
                    <div className="card w-80 h-96 bg-base-100 shadow-xl  hover:bg-primary group duration-700 mb-20 mx-auto overflow-auto" >
                        <div className="card-body">
                            <h2 className="text-center text-xl font-semibold group-hover:text-white text-primary duration-300">Instructions</h2>
                            <ul className="my-5 group-hover:text-white duration-300 list-decimal leading-7">
                                {
                                    detailRecipe.instructions.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>

                        </div>
                    </div>

                </div>
                <div className="w-32 flex items-center  mx-auto group">
                    <div className="text-4xl w-max">
                        <IoArrowBackCircleSharp className=" translate-x-6 text-white opacity-0  group-hover:opacity-100 group-hover:-translate-x-2 transition-all ease-in-out group-hover:text-primary " />
                    </div>
                    <button className="px-6 py-3 block mx-auto border border-primary rounded-md text-xl group-hover:bg-primary group-hover:text-white duration-300">
                        <Link to={'/recipes'}>
                            Kembali
                        </Link>
                    </button>
                </div>
            </div>
            <Footer />

        </>
    )
}

DetailRecipe.propTypes = {
    data: PropTypes.any,
    handleLike: PropTypes.func
}