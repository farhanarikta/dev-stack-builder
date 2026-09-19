const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm lg:sticky lg:top-24">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="text-sm font-medium text-gray-500">
          {stack.length} Technology Selected
        </span>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="text-center py-10">
          <div className="text-4xl mb-3">
            🧰
          </div>

          <h3 className="font-semibold text-gray-700">
            Your stack is empty
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div>
          
          {/* Stack Items */}
          <div className="space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl"
              >
                
                {/* Technology Icon */}
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-10 h-10 object-contain"
                />

                {/* Technology Information */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 truncate">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-500 truncate">
                    {technology.category}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition"
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-5 py-2.5 rounded-lg font-semibold text-red-600 border border-red-200 hover:bg-red-50 transition"
          >
            Remove All
          </button>

        </div>
      )}
    </aside>
  );
};

export default YourStack;