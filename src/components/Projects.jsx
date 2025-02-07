import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    SiJavascript, SiTypescript, SiPython, SiPhp, SiC, SiCplusplus
    , SiGo, SiRuby, SiSwift, SiKotlin, SiRust, SiDart, SiHtml5, SiCss3, SiSass
} from "react-icons/si";

export default function Projects() {
    const repoUrl = '/repos/users/Zaid-deve/repos';
    const [repos, setRepos] = useState([]);

    const languageIcons = {
        JavaScript: SiJavascript,
        TypeScript: SiTypescript,
        Python: SiPython,
        PHP: SiPhp,
        C: SiC,
        "C++": SiCplusplus,
        Go: SiGo,
        Ruby: SiRuby,
        Swift: SiSwift,
        Kotlin: SiKotlin,
        Rust: SiRust,
        Dart: SiDart,
        HTML: SiHtml5,
        CSS: SiCss3,
        SCSS: SiSass,
    };

    useEffect(() => {
        (async () => {
            const resp = await fetch(repoUrl);
            if (resp.status === 200) {
                const data = await resp.json();
                setRepos(data);
            }
        })();
    }, [repoUrl]);

    return (
        <div className="container mx-auto p-6 h-full overflow-y-auto">
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-8 justify-items-center place-items-start'>
                {repos && repos.filter(repo => (repo.name != 'Zaid-deve' || repo.name != 'portfolio')).map((repo, key) => {
                    const Icon = languageIcons[repo.language] || null;
                    
                    return (
                        <div key={key} className="max-w-[320px] w-full relative bg-glass rounded-2xl overflow-hidden bg-gradient-to-b from-white/15 to-white/10">
                            <div className="p-6 w-full">
                                <div className="flex justify-between items-center w-full">
                                    {Icon && <Icon className="text-3xl text-white" />}
                                    <Link to={repo.html_url} target="_blank" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-3xl text-sm px-5 py-2.5 flex gap-3 items-center">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                        </svg>
                                        <span>View Code</span>
                                    </Link>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 mt-4">{repo.name}</h3>
                                <p className="text-white">{repo.description || `\`Project ${repo.name}\``}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
