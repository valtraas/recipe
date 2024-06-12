import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaSmileBeam } from "react-icons/fa";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export const Caraousel = ({ data }) => {
  if (!data) {
    return <>
      <div className="flex flex-col gap-4 w-52 mx-auto">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    arrows: false,
    swipeToSlide: true,
  }

  return (
    <>
      <Slider {...settings}>
        {
          data.map((item, index) => (

            <div className="card w-80 bg-base-100 shadow-xl h-80 hover:bg-primary group duration-700" key={index}>
              <figure className="w-48 rounded-xl -mt-16 mx-auto h-32"><img src={item.image} alt={item.name} /></figure>
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
          ))
        }

      </Slider>
    </>
  )
}
Caraousel.propTypes = {
  data: PropTypes.any,
}