import { useState } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Navigation } from "./Navgation"
import { Popular } from "./Popular"
import { Recipes } from "./Recipes"
import { useEffect } from "react"
import PropTypes from "prop-types"

export const RecipeContainer = ({data}) => {
    const [sectionActive, setSectionActive] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            const popularSection = document.getElementById('popular');
            const recipesSection = document.getElementById('recipe');

            const scrollPosition = window.scrollY;
            const homeOffset = homeSection.getBoundingClientRect().top + window.scrollY;
            const popularOffset = popularSection.getBoundingClientRect().top + window.scrollY;
            const recipesOffset = recipesSection.getBoundingClientRect().top + window.scrollY;
            const tolerance = 470;

            if (scrollPosition >= homeOffset && scrollPosition < popularOffset - tolerance) {
                setSectionActive('home');
            } else if (scrollPosition >= popularOffset && scrollPosition < recipesOffset - tolerance) {
                setSectionActive('popular');

            } else if (scrollPosition >= recipesOffset - tolerance) {
                setSectionActive('recipe');

            }
        }
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])
    return (
        <>
            <Navigation activeSection={sectionActive} />
            <Header />
            <div className="relative">
                <svg width="260" height="460" viewBox="0 0 272 507" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 inset-y-[800px]">
                    <ellipse cx="252" cy="253.5" rx="252" ry="253.5" fill="#F8BB20" />
                </svg>
                <svg width="169" height="338" viewBox="0 0 169 338" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 bottom-[600px] md:bottom-[500px]">
                    <circle cy="169" r="169" fill="#F8BB20" />
                </svg>
                <svg width="190" height="190" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute md:left-96 md:top-0 top-32">
                    <circle cx="148" cy="148" r="148" fill="#F8BB20" />
                </svg>
                <svg width="71" height="71" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-20 top-72">
                    <circle cx="148" cy="148" r="148" fill="#F8BB20" />
                </svg>
                <svg width="71" height="71" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-20 top-[480px]">
                    <circle cx="148" cy="148" r="148" fill="#F8BB20" />
                </svg>
                <svg width="71" height="71" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-20 bottom-[480px]">
                    <circle cx="148" cy="148" r="148" fill="#F8BB20" />
                </svg>
                <svg width="71" height="71" viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-96 md:bottom-[780px] bottom-[980px]">
                    <circle cx="148" cy="148" r="148" fill="#F8BB20" />
                </svg>

                <Popular recipeData={data}/>
                <Recipes recipeData={data} />
                <Footer />
            </div>
        </>
    )
}
RecipeContainer.propTypes = {
    data : PropTypes.any
}