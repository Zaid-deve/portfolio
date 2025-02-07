import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-3 items-center justify-between text-white">
          <Link to="/home" className="text-3xl font-extrabold text-logo text-gray-500 underline">{`XD.Zaid`}</Link>
          <nav className="flex gap-3 text-2xl">
            <a href="https://www.instagram.com/dxdy.dev/" target="_portfolio" className="star-twelve h-12 w-12 flex items-center justify-center">
              <i className="fa fa-instagram hover:text-pink-700 text-pink-500"></i>
            </a>
            <a href="https://www.facebook.com/qwz.ax.bh" target="_portfolio" className="star-twelve h-12 w-12 flex items-center justify-center">
              <i className="fa fa-facebook hover:text-blue-700 text-blue-600"></i>
            </a>
            <a href="https://x.com/Zaid90701638" target="_portfolio" className="star-twelve h-12 w-12 flex items-center justify-center">
              <i className="fa fa-twitter hover:text-blue-500 text-blue-400"></i>
            </a>
            <a href="https://github.com/Zaid-deve" target="_portfolio" className="star-twelve h-12 w-12 flex items-center justify-center">
              <i className="fa fa-github hover:text-gray-400 text-white"></i>
            </a>
            {/* <a href="https://linkedin.com" target="_portfolio" className="star-twelve h-12 w-12 flex items-center justify-center">
              <i className="fa fa-linkedin hover:text-blue-800 text-blue-700"></i>
            </a> */}
          </nav>
        </div>
      </div>
    </div>
  );
}
