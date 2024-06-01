import Spline from "@splinetool/react-spline";
import "./Header.css";
import { Donut, CircleGrid, Circle } from 'react-awesome-shapes'

export default function Header() {
  return (
    <main className="main dark:bg-gray-900">
      <div className="header">
        <div className="header-text">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl lg:text-6xl">
               Sometimes life is scary and dark. That is why we must find the light.
          </h1>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
           Adventure Time isn’t just a cartoon; it’s a journey into the essence of what makes life extraordinary. It teaches us that even in a world filled with monsters and magic, the real adventure lies in the relationships we build and the courage we muster in the face of the unknown.
          </p>
          <button className="mb-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Adventure Time
          </button>
        </div>
        <div className="header-content">
        <Spline scene="https://prod.spline.design/gTQ9SpiiF-fGDQzD/scene.splinecode" />
        </div>
      </div>

      <CircleGrid
    color="#10b981"
    size="175px"
    zIndex={-2}
    className="absolute top-20 right-10"
   />

    </main>
  );
}
