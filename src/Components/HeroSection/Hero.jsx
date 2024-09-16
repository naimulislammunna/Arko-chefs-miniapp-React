
const Hero = () => {
    return (
        <div className='container bg-hero rounded-3xl'>
            <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
                <div className="hero-content text-center sm:w-3/4 w-[90%]">
                    <div className='text-white'>
                        <h1 className="sm:text-5xl text-2xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="py-6 my-4">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className="sm:flex sm:flex-row flex flex-col gap-3 justify-center">
                        <button className="btn btn-primary bg-[#0BE58A] rounded-full px-4 py-2 text-black font-bold">Exprole Now</button>
                        <button className="btn btn-primary px-4 py-2 border border-gray-300 font-bold rounded-full">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;