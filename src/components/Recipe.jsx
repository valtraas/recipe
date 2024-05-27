import { Card } from "./Card"
import { Navigation } from "./Navgation"
import { Footer } from "./Footer"
import PropTypes from "prop-types"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"


export const Recipe = ({ recipeData, handleLike }) => {
    const [categoryTitle, setCategoryTitle] = useState('All Recipe');
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if (location.state && location.state.category) {
            setCategoryTitle(location.state.category)
        }
    }, [location.state])

    const handleCategory = (category) => {
        setCategoryTitle(category)
    }
    let recipe;
    if (categoryTitle === 'Popular') {
        recipe = [...recipeData].sort((a, b) => b.likes - a.likes);
    } else if (categoryTitle !== 'All Recipe') {
        recipe = recipeData.filter(data => data.category === categoryTitle)
    }
    else {
        recipe = recipeData
    }
    // console.log(scrolled);
    return (
        <>
            <section id="recipe" className="mb-28 ">
                <Navigation categoryTitle={categoryTitle} recipe={recipeData} handleCategory={handleCategory} setScrolled={setScrolled} scrolled={scrolled} />
                <div className="md:grid lg:grid grid-cols-3 justify-items-center px-6 ">
                    <Card data={recipe} handleLike={handleLike} scrolled={scrolled} />
                </div>
            </section>

            <Footer />
        </>

    )
}
Recipe.propTypes = {
    recipeData: PropTypes.any,
    handleLike: PropTypes.func
}