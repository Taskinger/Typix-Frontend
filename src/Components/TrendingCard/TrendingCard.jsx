import React from 'react'
import { trendingData } from '../../assets/assets'

const TrendingCard = () => {
  return (
    <div className="space-y-5">
        {trendingData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden shadow-lg"
          >
            {/* Left - Image */}
            <div className="w-[120px] h-[120px] bg-white m-4 rounded-md flex-shrink-0 flex items-center justify-center">
              <img
                src={item.image}
                alt="Robot AI"
                className="w-[90px] h-[90px] object-contain"
              />
            </div>

            {/* Middle - Text */}
            <div className="flex-1 text-white px-4 py-3">
              <h3 className="font-bold font-josefin text-lg mb-1 leading-5">
                {item.title}
              </h3>
              <p className="text-sm text-white/80 leading-5">{item.description}</p>
              <p className="text-white font-semibold mt-2 text-sm">
                {item.author}
              </p>
            </div>

            {/* Right - Number */}
            <div className="bg-[#7ed7f738] h-full px-6 py-10 text-3xl md:text-4xl font-bold text-white font-josefin rounded-l-xl">
              {item.id}
            </div>
          </div>
        ))}
      </div>
  )
}

export default TrendingCard
