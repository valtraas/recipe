import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <>
            <section id="login" className="h-screen flex flex-col justify-center items-center">
            <Link to={'/'}>

            <p className="uppercase text-4xl my-5 font-bold text-white">Get <span className="text-error">Recipe</span></p>
            </Link>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="md:w-1/2 hidden"><img src="https://picsum.photos/400/650" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-error text-2xl font-semibold">Login</h2>
                        <h3 className="my-5 text-center">Insert Username & Password</h3>
                        <form className="flex flex-col gap-5 justify-center items-center  mb-5">
                            <div>
                                <label className="block mb-3">Username</label>
                                <input type="text" className="rounded-md p-2 " autoFocus />
                            </div>
                            <div className="">
                                <label className="block mb-3">Password</label>
                                <input type="text" className="rounded-md p-2" />
                            </div>
                        </form>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline btn-error">Login</button>
                        </div>
                        <p className="text-center">Dont have a account?
                            <Link to={'/register'}>
                                <span className="text-error hover:font-semibold  duration-300"> register</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}