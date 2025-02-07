import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
import aboutVector from '/src/assets/images/about.jpg'

export default function About() {
    const milestones = [
        { label: "Projects Completed", value: 50 },
        { label: "Years of Experience", value: 4 },
        { label: "Technologies Used", value: 30 },
    ];

    return (
        <div className="container mx-auto p-5 h-full overflow-y-auto">
            <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-6 p-6 py-12 bg-glass rounded-2xl max-w-[1120px] mx-auto" >
                {/* Left Section - Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="rounded-xl overflow-hidden md:w-60 w-40 md:h-80 h-60 bg-glass bg-center"
                        style={{
                            background: `url(${aboutVector}) center no-repeat`,
                            backgroundSize:'100%'
                        }}>
                    </div>
                </motion.div>

                <div className="md:w-1/2 flex flex-col gap-y-10">
                    {/* Right Section - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full text-white"
                    >
                        <h2 className="text-3xl font-bold mb-4">About Me</h2>
                        <h3 className="my-6 text-blue-600 font-bold text-3xl">✌️ Hello I Am Zaid Patel</h3>
                        <p className="text-lg mb-4">
                            I am a professional web developer skilled in web development, design, and maintenance. With a passion for creating efficient and visually appealing applications, I specialize in modern frameworks and technologies.
                        </p>
                        <p className="text-lg">
                            I strive to build seamless user experiences with a focus on performance and scalability.
                        </p>
                    </motion.div>
                    {/* Milestones Section */}
                    <div className="flex flex-wrap gap-10 justify-around">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2, delay: index * 0.2 }}
                                className="bg-glass p-6 rounded-lg text-center w-min"
                            >
                                <h3 className="text-3xl font-bold text-amber-400">{milestone.value}+</h3>
                                <p className="text-white font-bold text-sm mt-2">{milestone.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
