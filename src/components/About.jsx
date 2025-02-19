import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import aboutVector from '/src/assets/images/about-vector.png';
import resume from '/src/assets/pdf/Zaid-patel-resume.pdf';

export default function About() {
    const milestones = [
        { label: "Projects Completed", value: 50 },
        { label: "Years of Experience", value: 4 },
        { label: "Technologies Used", value: 30 },
    ];

    return (
        <div className="container mx-auto p-8 h-screen flex justify-center overflow-y-auto">
            <div className="relative w-full max-w-5xl bg-glass shadow-lg rounded-2xl p-10 flex flex-col md:flex-row gap-12 overflow-y-auto">
                {/* Left Section - Photo & Background */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative md:w-1/2 w-full flex justify-center hidden md:block"
                >
                    <div className="relative rounded-xl overflow-hidden w-82 h-106 bg-glass">
                        <img src={aboutVector} alt="About Me" className="object-contain w-full h-full" />
                    </div>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600 rounded-full opacity-30 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-28 h-28 bg-amber-500 rounded-full opacity-20 blur-2xl"></div>
                </motion.div>

                {/* Right Section - Text & Milestones */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 w-full flex flex-col flex-wrap justify-center gap-6 text-white"
                >
                    <h2 className="text-4xl font-extrabold text-blue-400">About Me</h2>
                    <h3 className="text-3xl font-bold">✌️ Hello, I Am <span className="text-amber-400">Zaid Patel</span></h3>
                    <p className="text-lg text-gray-200">
                        I am a professional web developer skilled in web design, development, and maintenance. My expertise lies in creating high-performance, scalable applications with a seamless user experience.
                    </p>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                whileHover={{ scale: 1.1 }}
                                className="bg-glass p-5 rounded-xl text-center shadow-md"
                            >
                                <h3 className="text-3xl font-extrabold text-amber-400">{milestone.value}+</h3>
                                <p className="text-gray-300 text-sm mt-2">{milestone.label}</p>
                            </motion.div>
                        ))}
                    </div>
                    <a
                        href={resume}
                        download="Zaid-Patel-Resume.pdf"
                        className={`shrink-0 relative bg-glass py-3 p-5 rounded-full font-semibold cursor-pointer flex items-center justify-center`}
                    >
                        <i className="fa fa-download text-white"></i>
                        <div className="ml-4">Download My CV</div>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
