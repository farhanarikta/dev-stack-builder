const TechnologyCard = ({ technology, onAdd }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

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
        <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
          {technology.category}
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-4">
        <span className="text-yellow-500">★</span>
        <span className="text-sm font-medium text-gray-700">
          {technology.rating}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() => onAdd(technology)}
        className="w-full mt-5 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;