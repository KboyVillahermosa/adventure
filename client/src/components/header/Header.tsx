import Spline from "@splinetool/react-spline";
import "./Header.css";
import { CircleGrid, Donut, SquareDonut } from "react-awesome-shapes";

export default function Header() {
  return (
    <main className="main dark:bg-gray-900">
      <div className="header">
        <div className="header-text">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl lg:text-6xl">
            Sometimes life is scary and dark That is why we must find the
            light.
          </h1>
          <p className="mb-2 text-gray-600 dark:text-gray-300">
            Adventure Time isn’t just a cartoon; it’s a journey into the essence
            of what makes life extraordinary. It teaches us that even in a world
            filled with monsters and magic, the real adventure lies in the
            relationships we build and the courage we muster in the face of the
            unknown.
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
        className="absolute right-10 top-20"
      />
        <CircleGrid
        color="#10b981"
        size="175px"
        zIndex={-2}
        className="absolute left-20 bottom-5"
      />

      <Donut
        color="#f43f5e"
        size="100px"
        width={["20px", "10px", "10px", "10px"]}
        zIndex={-2}
        className="absolute left-10 top-10"
      />
      <SquareDonut
        size="150px"
        zIndex={-2}
        color="#ef4444"
        className="absolute bottom-10 right-0"
      />
    </main>
  );
}
