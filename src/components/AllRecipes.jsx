import { Navigation } from "./Navgation"
import bg from "../assets/bgRecipe.png"
import { FaSmileBeam } from "react-icons/fa"
import { Footer } from "./Footer"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { HashLoader } from "react-spinners"
import { useState } from "react"
import { useEffect } from "react"
import { Caraousel } from "./Carousel"
export const AllRecipes = ({ data }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }
    

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    if (!data) {
        return <>
            <div className="flex items-center justify-center h-screen">
                <HashLoader color="#F8BB20" size={80} />
            </div>
        </>
    }

    const filterData = data.filter((item)=> item.name.toLowerCase().includes(searchInput.toLowerCase()))
    return (
        <>
            <Navigation />
            <div style={{ backgroundImage: `url(${bg})` }} className="h-[870px] -mt-72 md:bg-contain bg-cover bg-no-repeat bg-center  flex items-center justify-center ">
                <p className="text-primary text-5xl font-bold  px-4 py2 backdrop-blur-md"> Recipe</p>
            </div>
            <div className="shadow-t-xl md:rounded-t-[20%] rounded-t-[10%]  -mt-56 bg-white  mx-auto pt-32 relative mb-44">
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

                <div className=" w-1/2 mx-auto  mb-44">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" onChange={handleSearchInput} value={searchInput}/>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                {
                    isMobile ? (
                        <>
                            <Caraousel data={filterData} />
                        </>
                    ) : (
                        <>
                            <div className="flex flex-wrap items-center justify-center p-4 gap-7  ">
                                {filterData.map((item) => (
                                    <div className="card w-80 bg-base-100 shadow-xl h-80 hover:bg-primary group duration-700 mb-20" key={item.id}>
                                        <figure className="w-48 rounded-xl -mt-16 mx-auto"><img src={item.image} alt={item.name} /></figure>
                                        <div className="card-body">

                                            <h2 className="text-center text-xl font-semibold group-hover:text-white text-primary duration-300 underline">
                                                <Link to={`/detail/${item.slug}`}>
                                                    {item.name}
                                                </Link>
                                            </h2>
                                            <p className="my-5 group-hover:text-white duration-300">{item.description}</p>
                                            <div className="card-actions justify-center">
                                                <button className="px-4 py-2 flex items-center border rounded-md gap-2 group-hover:bg-white duration-300 cursor-default border-primary"><FaSmileBeam className="text-xl text-primary" /> {item.likes}</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </>
                    )
                }

            </div >
            <Footer />
        </>
    )
}
AllRecipes.propTypes = {
    data: PropTypes.any
}