import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";

const App = () => {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load technologies from JSON
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

  // Add technology to stack
  const handleAddToStack = (technology) => {
    setStack((currentStack) => {
      // Prevent duplicate technology
      const alreadyAdded = currentStack.some(
        (item) => item.id === technology.id
      );

      if (alreadyAdded) {
        return currentStack;
      }

      return [...currentStack, technology];
    });
  };

  // Remove one technology from stack
  const handleRemoveFromStack = (technologyId) => {
    setStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== technologyId)
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Technology Section */}
      {loading ? (
        <p className="text-center text-gray-600 py-10">
          Loading technologies...
        </p>
      ) : (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">

            {/* Section Heading */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Explore Technologies
              </h2>

              <p className="text-gray-600 mt-3">
                Discover the tools and technologies you can add to your
                developer stack.
              </p>
            </div>

            {/* Technologies + Your Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

              {/* Technology Cards */}
              <div className="lg:col-span-3">
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

              {/* Your Stack Sidebar */}
              <div className="lg:col-span-1">
                <YourStack
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>

            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default App;