const TopBar = () => {
  return (
    <div className="bg-gold text-dark text-xs font-bold tracking-widest py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center gap-8 mx-8">
            <span>🚚 FREE SHIPPING ON ORDERS ABOVE RS. 2000</span>
            <span>•</span>
            <span>💵 CASH ON DELIVERY AVAILABLE</span>
            <span>•</span>
            <span>🔄 7-DAY EASY RETURNS</span>
            <span>•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
