import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json"; // Add this
import SearchFilter from "./SearchFilter";
import SkeletonCard from "./SkeletonCard.jsx";
import ProductModal from "./ProductModal";

const ProductGrid = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]); // Add this state

  // Fetch products from PHP API
  useEffect(() => {
    // Use static data for mobile testing
    const productsArray = Array.isArray(productsData) ? productsData : Object.values(productsData);
    setProducts(productsArray);
    setLoading(false);
  }, []);

  // Filter and sort products
  const filtered = products
    .filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || p.category === category;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sortBy === "low") return a.price - b.price;
      if (sortBy === "high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <section id="products" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] text-sm mb-3 uppercase">Our Collection</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">PREMIUM PRODUCTS</h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Results Count */}
        {!loading && (
          <div className="px-4 mb-4">
            <p className="text-gray-600 text-xs tracking-widest">
              SHOWING {filtered.length} PRODUCT{filtered.length !== 1 ? "S" : ""}
            </p>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg tracking-widest">NO PRODUCTS FOUND</p>
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="mt-4 text-gold text-xs tracking-widest border border-gold/30 px-6 py-2 hover:bg-gold hover:text-dark transition-colors"
            >
              CLEAR FILTERS
            </button>
          </div>
        )}

      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductGrid;