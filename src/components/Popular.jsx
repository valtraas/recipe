import PropTypes from "prop-types"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Popular = ({ data }) => {
    const popularRecipe = [...data].sort((a, b) => b.likes - a.likes).slice(0,5)

    const settings = {
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    className:"center",
    centerMode: true,
    slidesToScroll: 2,
    autoplay : true,
    autoplaySpeed:2000,
    arrows:false,
    swipeToSlide:true,
    

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    console.log(popularRecipe);
    return (
        <>
            <p className=" text-xl text-white font-semibold  mt-10 ">Most popular</p>
            <div className=" mb-16 p-6">
            <Slider {...settings}>

                {
                    popularRecipe.map((popular) => (
                        <div className="card md:w-80 w-10 bg-base-100 shadow-xl " key={popular.id}>
                        <figure className="md:w-48 w-28 rounded-xl -mt-16 mx-auto"><img src= {popular.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-center text-2xl font-bold">
                                    {popular.name}
                                </h2>
                                <p className="text-center text-white my-5">{popular.description}</p>
                                <div className="card-actions md:justify-end justify-center md:mb-0 mb-5">
                                    <div className="badge badge-outline">{popular.category}</div>
                                </div>
                                <div className="flex bg-neutral w-20 p-2 rounded-md items-center gap-5">
                                    <i className="fa-regular fa-thumbs-up  text-xl"></i>
                                    <p>{popular.likes}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </Slider>
            </div>

        </>
    )
}

Popular.propTypes = {
    data: PropTypes.any
}