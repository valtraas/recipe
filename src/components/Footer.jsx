import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Wave from "react-wavify"
export const Footer = () => {
  return (
    <>

    <footer className="footer footer-center p-10 bg-primary text-white w-3/4 mx-auto rounded-md mb-28 shadow-xl">
      <aside>
        <p className="uppercase text-3xl font-bold">get recipe</p>
        <p className="text-xl font-semibold">Get Recipe Get happy</p>
      </aside>
      <div className="flex justify-center items-center gap-5">
        <div className="mask mask-circle bg-white p-3">
          <FaInstagram className="text-red-600 text-2xl"/>
        </div>
        <div className="mask mask-circle bg-white p-3">
          <FaFacebook className="text-blue-600 text-2xl"/>
        </div>
        <div className="mask mask-circle bg-white p-3">
          <FaTwitter className="text-sky-600 text-2xl"/>
        </div>
      </div>
    </footer>
    <div >
    <Wave fill="#F8BB20"
      paused ={false}
      options={{ 
        height:20,
        amplitude:50,
        speed:0.15,
        points:4
       }}
    />
    <p className="text-white text-center bg-primary -mt-8 p-4">Copyright © 2024 - All right reserved </p>
    </div>
    </>
  )
}