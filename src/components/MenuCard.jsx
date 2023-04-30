import React from "react";
import Button from "./Button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const MenuCard = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full bg-white rounded-lg py-3 px-6 flex flex-col justify-center items-center shadow-2xl">
              <img
                className="rounded h-5/6 object-cover"
                src="https://img.freepik.com/free-psd/cheese-burger-icon-isolated-3d-render-ilustration_439185-12572.jpg?w=2000"
                alt="product image"
              />
            <div className="mt-3">
                <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white p-0 m-0">
                  Pizza Fajita Burger
                </h6>
              <div className="flex items-center justify-between mt-3 gap-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $599
                </span>
                <Button>
                  <span className="flex gap-2">
                    Add To Cart <ShoppingCartIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuCard;
