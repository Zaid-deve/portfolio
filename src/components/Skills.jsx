import {
    DiJavascript, DiReact, DiHtml5, DiCss3, DiBootstrap,
    DiPhp, DiNodejs, DiPython, DiJava, DiLaravel,
    DiMongodb, DiMysql, DiPostgresql, DiFirebase,
    DiGit, DiGithub, DiVisualstudio, DiNpm,
    DiNodejsSmall
} from "react-icons/di";
import { SiExpress,SiTailwindcss } from "react-icons/si";

export default function Skills() {
    return (
        <div className="container mx-auto h-full overflow-y-auto p-5">
            <div className="flex md:gap-4 gap-12 md:justify-around flex-col md:flex-row p-6 py-12 bg-glass rounded-2xl">
                <div className="flex flex-col md:max-w-[420px]">
                    <h1 className="text-3xl font-bold">My Skills</h1>
                    <p className="text-gray-500 mt-4">
                        I have experience working with various technologies across frontend, backend, databases, and development tools.
                    </p>
                    <div className="flex flex-row gap-6 text-6xl md:justify-between justify-around items-center mt-10 bg-glass p-6 rounded-xl flex-wrap">
                        {[
                            { icon: <DiMongodb className="text-green-700" />, letter: 'M' },
                            { icon: <SiExpress className="text-gray-500" />, letter: 'E' },
                            { icon: <DiReact className="text-blue-500" />, letter: 'R' },
                            { icon: <DiNodejsSmall className="text-green-500" />, letter: 'N' },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                                <span>{item.icon}</span>
                                <span className="text-white text-4xl font-bold">
                                    {item.letter}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6">

                    {/* Frontend Section */}
                    <div>
                        <h3 className="font-bold text-xl">Frontend:</h3>
                        <div className="flex flex-wrap gap-6 text-4xl mt-3">
                            {[
                                { icon: <DiHtml5 className="text-orange-500" />, label: "HTML5" },
                                { icon: <DiCss3 className="text-blue-500" />, label: "CSS3" },
                                { icon: <DiJavascript className="text-yellow-500" />, label: "JavaScript" },
                                { icon: <DiReact className="text-blue-400" />, label: "React.js" },
                                { icon: <DiBootstrap className="text-purple-600" />, label: "Bootstrap" },
                                { icon: <SiTailwindcss  className="text-teal-500" />, label: "Tailwind" },
                            ].map(({ icon, label }, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {icon}
                                    <span className="text-sm mt-2">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Section */}
                    <div>
                        <h3 className="font-bold text-xl">Backend:</h3>
                        <div className="flex flex-wrap gap-6 text-4xl mt-3">
                            {[
                                { icon: <DiPhp className="text-indigo-500" />, label: "PHP" },
                                { icon: <DiNodejs className="text-green-500" />, label: "Node.js" },
                                { icon: <DiPython className="text-blue-600" />, label: "Python" },
                                { icon: <DiJava className="text-red-600" />, label: "Java" },
                                { icon: <DiLaravel className="text-red-500" />, label: "Laravel" },
                            ].map(({ icon, label }, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {icon}
                                    <span className="text-sm mt-2">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Database Section */}
                    <div>
                        <h3 className="font-bold text-xl">Database:</h3>
                        <div className="flex flex-wrap gap-6 text-4xl mt-3">
                            {[
                                { icon: <DiMongodb className="text-green-700" />, label: "MongoDB" },
                                { icon: <DiMysql className="text-blue-500" />, label: "MySQL" },
                                { icon: <DiPostgresql className="text-indigo-500" />, label: "PostgreSQL" },
                                { icon: <DiFirebase className="text-yellow-500" />, label: "Firebase" },
                            ].map(({ icon, label }, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {icon}
                                    <span className="text-sm mt-2">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div>
                        <h3 className="font-bold text-xl">Tools:</h3>
                        <div className="flex flex-wrap gap-6 text-4xl mt-3">
                            {[
                                { icon: <DiGit className="text-orange-600" />, label: "Git" },
                                { icon: <DiGithub className="text-gray-800 dark:text-white" />, label: "GitHub" },
                                { icon: <DiVisualstudio className="text-blue-500" />, label: "VS Code" },
                                { icon: <DiNpm className="text-red-600" />, label: "NPM" },
                            ].map(({ icon, label }, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {icon}
                                    <span className="text-sm mt-2">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
