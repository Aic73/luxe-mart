import { FiSearch, FiSliders } from "react-icons/fi";

const SearchFilter = ({ search, setSearch, category, setCategory, sortBy, setSortBy }) => {
  const categories = ["All", "Skincare", "Fragrance", "Home Decor", "Beauty", "Grooming", "Gift Sets"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3.5 mb-6 focus-within:border-gold/50 transition-colors">
        <FiSearch className="text-gold flex-shrink-0" size={16} />
        <input
          type="text"
          placeholder="Search luxury products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-white text-sm tracking-wider focus:outline-none placeholder-gray-600"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="text-gray-500 hover:text-gold transition-colors text-xs tracking-widest"
          >
            CLEAR
          </button>
        )}
      </div>

      {/* Filter + Sort Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 text-[10px] tracking-widest border transition-all duration-300 ${
                category === cat
                  ? "bg-gold text-dark border-gold font-black"
                  : "border-white/10 text-gray-500 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <FiSliders size={14} className="text-gold" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/5 border border-white/10 text-gray-400 text-xs tracking-widest px-3 py-2 focus:outline-none focus:border-gold/50 transition-colors cursor-pointer"
          >
            <option value="default" className="bg-dark">DEFAULT</option>
            <option value="low" className="bg-dark">PRICE: LOW TO HIGH</option>
            <option value="high" className="bg-dark">PRICE: HIGH TO LOW</option>
            <option value="rating" className="bg-dark">TOP RATED</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default SearchFilter;