import PropTypes from "prop-types"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Navigation = ({ recipe, categoryTitle, handleCategory, setScrolled, scrolled }) => {
    const recipeCategory = Array.from(new Set(recipe.map(recipe => recipe.category)))

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    }, [setScrolled])



    const handleButton = (category) => {
        handleCategory(category);
    }

    const detailPage = location.pathname.includes('/detail');
    return (
        <>
            <nav className={scrolled ? 'duration-300' : 'p-6 duration-700'}>
                <div className={scrolled ? 'navbar bg-base-100 duration-300  justify-between p-4 fixed top-0 z-[9999] ' : 'navbar bg-base-100 rounded-md mb-36 justify-between p-4  '}>
                    <div className="z-[9999] ">
                        <a className=" text-xl uppercase text-white">Get <span className="text-error">Recipe</span></a>
                    </div>
                    <div className="md:block hidden z-[9999] ">
                        <p className="text-white text-xl font-bold">{categoryTitle}</p>
                    </div>
                    <div className="md:block">
                       
                        <ul className="menu md:menu-horizontal px-1 hidden">
                            <li>
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                {
                                    detailPage ? (
                                        <Link to={'/recipe'} state={{ category: 'Popular' }}>
                                            <button className={categoryTitle === 'Popular' ? 'text-error font-semibold' : ''}>Popular</button>
                                        </Link>
                                    ) : (
                                        <button className={categoryTitle === 'Popular' ? 'text-error font-semibold' : ''} onClick={() => handleButton('Popular')}>Popular</button>
                                    )
                                }
                            </li>
                            <li>
                                <details>
                                    <summary>
                                        Category
                                    </summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                        <li className="mb-4 ">
                                            {
                                                detailPage ? (
                                                    <Link to={'/recipe'} state={{ category: 'All Recipe' }}>

                                                        <button className={categoryTitle === 'All Recipe' ? 'text-error font-semibold' : ''} onClick={() => handleButton('All Recipe')}>All Recipe</button>
                                                    </Link>
                                                ) : (

                                                    <button className={categoryTitle === 'All Recipe' ? 'text-error font-semibold' : ''} onClick={() => handleButton('All Recipe')}>All Recipe</button>
                                                )
                                            }
                                        </li>
                                        {
                                            recipeCategory.map((category, index) => (
                                                <li key={index} className="mb-4">
                                                    {
                                                        detailPage ? (
                                                            <Link to={'/recipe'} state={{ category: category }}>

                                                                <button className={categoryTitle === category ? 'text-error font-semibold' : ''} onClick={() => handleButton(category)} >{category}</button>
                                                            </Link>
                                                        ) : (

                                                            <button className={categoryTitle === category ? 'text-error font-semibold' : ''} onClick={() => handleButton(category)} >{category}</button>
                                                        )
                                                    }
                                                </li>

                                            ))
                                        }
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                        <div className="md:hidden block absolute top-16  w-full  left-0 right-0 z-50 ">
                            <ul className="md:hidden flex gap-10 bg-base-100 p-4 rounded-md w-max mx-auto">
                                <li>
                                    <Link to={'/'}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    {
                                        detailPage ? (
                                            <Link to={'/recipe'} state={{ category: 'Popular' }}>
                                                <button className={categoryTitle === 'Popular' ? 'text-error font-semibold' : ''}>Popular</button>
                                            </Link>
                                        ) : (
                                            <button className={categoryTitle === 'Popular' ? 'text-error font-semibold' : ''} onClick={() => handleButton('Popular')}>Popular</button>
                                        )
                                    }
                                </li>
                                <li>
                                    <details>
                                        <summary>
                                            Category
                                        </summary>
                                        <ul className="p-2 bg-base-100 rounded-t-none">
                                            <li className="mb-4 ">
                                                {
                                                    detailPage ? (
                                                        <Link to={'/recipe'} state={{ category: 'All Recipe' }}>

                                                            <button className={categoryTitle === 'All Recipe' ? 'text-error font-semibold' : ''} onClick={() => handleButton('All Recipe')}>All Recipe</button>
                                                        </Link>
                                                    ) : (

                                                        <button className={categoryTitle === 'All Recipe' ? 'text-error font-semibold' : ''} onClick={() => handleButton('All Recipe')}>All Recipe</button>
                                                    )
                                                }
                                            </li>
                                            {
                                                recipeCategory.map((category, index) => (
                                                    <li key={index} className="mb-4">
                                                        {
                                                            detailPage ? (
                                                                <Link to={'/recipe'} state={{ category: category }}>

                                                                    <button className={categoryTitle === category ? 'text-error font-semibold' : ''} onClick={() => handleButton(category)} >{category}</button>
                                                                </Link>
                                                            ) : (

                                                                <button className={categoryTitle === category ? 'text-error font-semibold' : ''} onClick={() => handleButton(category)} >{category}</button>
                                                            )
                                                        }
                                                    </li>

                                                ))
                                            }
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                </div>

            </nav>
        </>
    )
}

Navigation.propTypes = {
    categoryTitle: PropTypes.string,
    recipe: PropTypes.any,
    handleCategory: PropTypes.func,
    setScrolled: PropTypes.func,
    scrolled: PropTypes.any
}