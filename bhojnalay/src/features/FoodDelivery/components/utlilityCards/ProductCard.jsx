import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-[28%] mx-auto p-6 bg-white shadow-lg rounded-3xl">
      {/* Container for box and pizza with red background effect */}
      <div className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-8 rounded-2xl mb-2 shadow-2xl">
        {/* Open pizza box */}
        <div className="relative mx-auto w-48 h-32 bg-gradient-to-r from-[#FF4444] to-[#CC0000] border-8 border-[#FF6666]/50 rounded-t-3xl -rotate-6 shadow-2xl transform -skew-x-3 origin-bottom hover:rotate-[-2deg] transition-all duration-300 hover:scale-[1.02]">
          {/* Box lid details: stripes */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-70" />
          <div className="absolute -top-2 left-4 w-24 h-3 bg-gradient-to-r from-white/50 to-white/30 rounded-full shadow-lg" />
          <div className="absolute -top-2 right-4 w-20 h-3 bg-gradient-to-r from-white/40 to-white/20 rounded-full shadow-lg" />

          {/* Flatz label on lid */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white bg-black/40 px-2 py-1 rounded-full shadow-lg uppercase tracking-wider">
            Flatz
          </div>

          {/* Pizza inside box */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-b from-yellow-400/90 via-orange-400/90 to-yellow-300/90 rounded-2xl shadow-2xl border-2 border-yellow-500/80 -skew-x-3 rotate-[-1deg]">
            {/* Cheese melt */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/80 to-amber-200/70 rounded-2xl blur-sm" />
            {/* Toppings: peppers, etc. */}
            <div className="absolute top-1 right-2 w-3 h-3 bg-green-500/90 rounded-full shadow-lg" />
            <div className="absolute top-3 left-3 w-2 h-2 bg-red-500/90 rounded-full shadow-lg" />
            <div className="absolute bottom-2 right-4 w-4 h-4 bg-orange-400/90 rounded-full shadow-lg -rotate-45" />
            <div className="absolute bottom-3 left-6 w-2.5 h-2.5 bg-yellow-400/90 rounded-full shadow-lg" />
          </div>

          {/* Feed Good Times label at bottom */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-white/90 bg-black/50 px-1.5 py-0.5 rounded shadow-inner uppercase tracking-widest">
            Feed Good Times
          </div>
        </div>

        {/* Pizza on wooden board next to box */}
        <div className="absolute top-4 right-4 w-28 h-20 bg-gradient-to-b from-orange-800/50 to-brown-900/60 rounded-2xl shadow-xl border border-orange-600/70 -rotate-3 transform hover:rotate-0 transition-all duration-300">
          {/* Wood grain */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#d4a574_0%,#c89664_50%,#d4a574_100%)] bg-repeat-x bg-[length:20px_100%]" />
          {/* Pizza on board */}
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/95 via-orange-400/95 to-yellow-300/95 rounded-2xl shadow-2xl border-2 border-yellow-500/90 -skew-x-2 rotate-[-1deg] ml-1 mr-1 mt-1 mb-1">
            {/* Cheese */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/80 to-amber-200/70 rounded-2xl blur-sm" />
            {/* Toppings */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-green-500/95 rounded-full shadow-lg" />
            <div className="absolute top-3 left-2 w-2.5 h-2.5 bg-red-500/95 rounded-full shadow-lg" />
            <div className="absolute bottom-2 right-3 w-4 h-4 bg-orange-400/95 rounded-full shadow-lg -rotate-30" />
            <div className="absolute bottom-3 left-4 w-2 h-2 bg-yellow-400/95 rounded-full shadow-lg" />
            <div className="absolute top-1 left-6 w-1.5 h-1.5 bg-lime-500/95 rounded-full shadow-lg" />
          </div>
        </div>
      </div>

      {/* Bottom info section */}
      <div className="space-y-1">
        {/* Pizza Hut title */}
        <h3 className="text-md font-bold text-gray-800 leading-tight">
          Pizza Hut
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 bg-green-500 rounded-full shadow-sm flex items-center justify-center">
            <span className="text-xs font-bold text-white">★</span>
          </div>
          <span className="text-sm font-bold text-gray-700">4.1</span>
        </div>

        {/* Delivery time */}
        <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
            20-25 mins
          </span>
        </div>

        {/* Pizzas label */}
        <div className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Pizzas
        </div>

        {/* Location with green badge */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          <span className="text-sm font-medium text-gray-700">
            Kalani Nagar
          </span>
          <div className="w-16 h-5 bg-green-500 rounded-full shadow-sm flex items-center justify-center">
            <span className="text-xs font-bold text-white">Flatz</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
