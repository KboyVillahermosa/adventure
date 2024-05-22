import Spline from "@splinetool/react-spline";
import "./Header.css";

export default function Header() {
  return (
    <main className="main dark:bg-gray-900">
      <div className="header">
        <div className="header-text">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl lg:text-6xl">
            Work fast create beautiful 3d experience
          </h1>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            Easy to use web app that equips the next generation of designers and
            engineers with the foundation skills for innovation in 3D design,
            electronics, and coding.
          </p>
          <button className="mb-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            View
          </button>
        </div>
        <div className="header-content">
        <Spline scene="https://prod.spline.design/LefR7vsWYajP5i2Y/scene.splinecode" />
        </div>
      </div>
    </main>
  );
}
