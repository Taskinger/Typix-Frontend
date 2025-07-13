import React from "react";
import TrendingCard from "../../Components/TrendingCard/TrendingCard.jsx";

const Trending = () => {
  return (
    <div className="py-8 px-4 md:px-12 text-white min-h-screen border-b border-b-white">
      <h2 className="text-6xl md:text-6xl font-bold text-center mb-6 font-jersey">
        Trending Now
      </h2>
      <TrendingCard/>
    </div>
  );
};

export default Trending;
