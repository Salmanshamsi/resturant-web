import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="mt-1 max-w-7xl">
      <div className="flex bg-white h-96 container mx-auto">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-black text-gray-800 md:text-5xl font-serif">
              Welcome to <span className="text-indigo-600">Taste of Karachi</span>
              
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base md:font-semibold font-serif">
              Experience Authentic Pakistani Cuisine in the Heart of the City
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Button>Make a Reservation</Button>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            className="h-full object-cover"
            style={{
              backgroundImage: `url('https://cdn.dribbble.com/users/1731254/screenshots/8346192/italian_food_illustration_tubikarts.png')`,
              backgroundSize: "cover",
            }}
          >
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
