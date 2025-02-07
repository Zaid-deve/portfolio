import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";

export default function Nav() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isCollapsed) {
            gsap.to(navRef.current, { width: "0", duration: 0.5, ease: "power2.inOut" }).eventCallback('onComplete', () => {
                navRef.current.style.display = 'none'
            })
        } else {
            navRef.current.style.display = 'flex'
            gsap.to(navRef.current, { width: "100%", duration: 0.5, ease: "power2.inOut" });
        }
    }, [isCollapsed]);

    return (
        <div className="w-full flex items-center md:px-6 md:py-2">
            <div ref={navRef} className="flex items-center justify-between gap-6 bg-glass md:rounded-full overflow-auto md:py-4 p-3 transition-all md:max-w-max">
                {[
                    { icon: "fa-home", label: "Home",to:'/home' },
                    { icon: "fa-laptop", label: "Tech Stack",to:'/skills' },
                    { icon: "fa-th-large", label: "Projects",to:'/projects' },
                    { icon: "fa-user", label: "About",to:'/about' },
                    { icon: "fa-envelope", label: "Contact",to:'/contact' },
                ].map((item, index) => (
                    <div key={index} className="flex gap-3 items-center cursor-pointer hover:translate-y-[-1px] transition-all-300 md:flex-row flex-col shrink-0" onClick={() => navigate(item.to)}>
                        <div className="star-twelve h-10 w-10 flex items-center justify-center">
                            <i className={`fa ${item.icon} nav-icon`}></i>
                        </div>
                        <span className="whitespace-nowrap text-sm md:text-[1rem]">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Toggle Button (Always Visible) */}
            <div className="ml-3 cursor-pointer hover:translate-y-[-1px] transition-all-300 shrink-0 p-3" onClick={() => setIsCollapsed(!isCollapsed)}>
                <div className="star-twelve h-14 w-14 flex items-center justify-center">
                    <i className={`fa ${isCollapsed ? "fa-angle-right" : "fa-angle-left"} nav-icon`} style={{ fontSize: "2.5rem" }}></i>
                </div>
            </div>
        </div>
    );
}
