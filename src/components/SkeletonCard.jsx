const SkeletonCard = () => {
  return (
    <div className="bg-card border border-gold/10 animate-pulse">
      <div className="h-64 bg-gray-800" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-800 rounded w-3/4" />
        <div className="h-3 bg-gray-800 rounded w-full" />
        <div className="h-3 bg-gray-800 rounded w-2/3" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-6 bg-gray-800 rounded w-1/3" />
          <div className="h-8 bg-gray-800 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;