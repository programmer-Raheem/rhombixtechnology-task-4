"use client";

import { useState } from "react";
import DishForm from "./components/Dishform";

export interface Dish {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

export default function AdminPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => {
    setDishes([...dishes, dish]);
  };

  const deleteDish = (id: string) => {
    setDishes(dishes.filter((dish) => dish.id !== id));
  };

  const updateDish = (updatedDish: Dish) => {
    setDishes(dishes.map((d) => (d.id === updatedDish.id ? updatedDish : d)));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Menu Management</h1>

      {/* Add new dish */}
      <DishForm onSave={addDish} />

      {/* Existing dishes list */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Current Menu</h2>
      <div className="space-y-4">
        {dishes.length === 0 && <p>No dishes added yet.</p>}
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="flex justify-between items-center border p-4 rounded-lg bg-surface-alt"
          >
            <div>
              <p className="font-bold">{dish.name}</p>
              <p className="text-sm text-muted">${dish.price.toFixed(2)}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => deleteDish(dish.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <DishForm dish={dish} onSave={updateDish}>
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Edit
                </button>
              </DishForm>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
