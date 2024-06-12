import headerImg from "/img/header.jpg"
import Typewriter from "typewriter-effect"
export const Header = () => {
    return (
        <>
          
            <section id="home" className="mb-28">
            <div className="flex justify-evenly mt-10 items-center ">
                <div className="w-1/2">
                    <p className="md:text-2xl text-xl font-semibold  my-2">Embark on a Culinary Journey and Discover Deliciousness in Every Dish</p>
                    <div className="md:text-4xl text-primary font-bold text-2xl">
                        <Typewriter
                            options={{ 
                                strings : ["Comprehensive", "Delicious", "Exciting"],
                                autoStart: true,
                                loop : true
                             }}
                        />
                    </div>
                </div>
                <div className="md:block hidden">
                    <img src={headerImg} className="mask mask-circle w-80" />
                </div>
            </div>
            </section>
        </>
    )
}