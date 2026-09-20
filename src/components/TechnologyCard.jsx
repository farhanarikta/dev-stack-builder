import { toast } from "react-toastify";

const TechnologyCard = ({ technology, onAdd, isAdded }) => {
  const handleButtonClick = () => {
    if (isAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    onAdd(technology);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300">

      {/* Icon and Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-12 h-12 object-contain"
        />

        <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-600">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="text-xl font-bold text-gray-900 mt-4">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mt-2 min-h-[60px]">
        {technology.description}
      </p>

      {/* Category and Difficulty */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
          {technology.category}
        </span>

        <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-4">
        <span className="text-yellow-500 text-lg">
          ★
        </span>

        <span className="text-sm font-medium text-gray-700">
          {technology.rating}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
  onClick={handleButtonClick}
  className={`w-full mt-5 py-2.5 rounded-lg font-semibold transition ${
    isAdded
      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
      : "text-white gradient-theme hover:opacity-90"
  }`}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>

    </div>
  );
};

export default TechnologyCard;