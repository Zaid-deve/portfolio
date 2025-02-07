import {Link} from 'react-router-dom'
import vectorImg from '/src/assets/images/vector.png';

export default function Home() {
    return (
        <div className="size-full flex">
            <div className="container px-8 mx-auto">
                <div className="flex flex-col-reverse md:flex-row justify-around md:items-start items-center gap-6 pt-15 pb-50 md:pb-0">
                    <div className="self-center">
                        <h1 className="text-header text-4xl font-extrabold text-gray-300">
                            Hey, welcome 😊<br /> to my web page
                        </h1>
                        <p className="pt-3 text-gray-200">I am a passionate web developer from india, <br />find my work, skills and about me from the navigation.</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5">
                            <Link to='/projects' className="shrink-0 relative bg-blue-950 py-3 p-5 rounded-full font-bold cursor-pointer">
                                <span>See my work.</span>
                                <div className="absolute top-3 left-35">
                                    <i className="fa fa-arrow-right text-white"></i>
                                </div>
                            </Link>
                            <Link target="_portfolio" to="https://github.com/Zaid-deve" className="shrink-0 bg-glass shaodw-lg py-3 p-5 rounded-full font-bold cursor-pointer flex gap-3 items-center">
                                <i className="fa fa-github text-lg"></i>
                                <span>My github repo.</span>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-hero md:h-90 md:w-90 sm:h-75 sm:w-75 h-65 w-65 overflow-hidden shrink-0">
                        <div className="h-100 w-100" style={{
                            background: `url(${vectorImg}) center no-repeat`,
                            backgroundSize: 'contain'
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}