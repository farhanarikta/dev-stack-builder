import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((currentStack) => [...currentStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemoveFromStack = (technologyId) => {
    const removedTechnology = stack.find(
      (technology) => technology.id === technologyId
    );

    setStack((currentStack) =>
      currentStack.filter(
        (technology) => technology.id !== technologyId
      )
    );

    if (removedTechnology) {
      toast.success(`${removedTechnology.name} removed from your stack.`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.success("All technologies removed from your stack.");
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
                      isAdded={stack.some(
                        (item) => item.id === technology.id
                      )}
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

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />

    </div>
  );
};

export default App;