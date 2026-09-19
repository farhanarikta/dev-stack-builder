import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology) => {
    console.log("Add to stack:", technology);
  };

  return (
    <>
      <Navbar />

      <Hero />

      {loading ? (
        <p className="text-center text-gray-600 py-10">
          Loading technologies...
        </p>
      ) : (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Explore Technologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

          </div>
        </section>
      )}
    </>
  );
}

export default App;