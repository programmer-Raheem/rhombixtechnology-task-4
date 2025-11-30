"use client";

import { useState, ReactNode, useEffect } from "react";
import { Dish } from "../page";

interface DishFormProps {
  onSave: (dish: Dish) => void;
  dish?: Dish;
  children?: ReactNode; // optional, for edit button
}

export default function DishForm({ onSave, dish, children }: DishFormProps) {
  const [name, setName] = useState(dish?.name || "");
  const [price, setPrice] = useState(dish?.price || 0);
  const [image, setImage] = useState(dish?.image || "");
  const [description, setDescription] = useState(dish?.description || "");

  // Hydration-safe reset when editing
  useEffect(() => {
    setName(dish?.name || "");
    setPrice(dish?.price || 0);
    setImage(dish?.image || "");
    setDescription(dish?.description || "");
  }, [dish]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDish: Dish = {
      id: dish?.id || crypto.randomUUID(), // stable id
      name,
      price,
      image,
      description,
      rating: dish?.rating || 5,
      reviews: dish?.reviews || 0,
    };
    onSave(newDish);

    // clear form if adding new
    if (!dish) {
      setName("");
      setPrice(0);
      setImage("");
      setDescription("");
    }
  };

  if (children) {
    // If children provided (Edit button), wrap it
    return <span onClick={handleSubmit}>{children}</span>;
  }

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg bg-surface-alt mb-6">
      <h3 className="font-bold mb-2">{dish ? "Edit Dish" : "Add New Dish"}</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      {!dish && (
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
          Add Dish
        </button>
      )}
    </form>
  );
}
