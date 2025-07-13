import React from 'react';

const Card = ({ image, title, description, author, date }) => {
  return (
    <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl p-5 shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 object-contain rounded-md mb-4 bg-white/20" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-base font-semibold">{author} | {date} </p>
      <p className="text-sm text-gray-200 mb-4">{description}</p>
    </div>
  );
};

export default Card;
