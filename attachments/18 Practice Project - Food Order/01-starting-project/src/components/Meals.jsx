//http://localhost:3000/meals
import { useState, useEffect } from "react";
import { MealItem } from "./MealItem";

export function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    };

    fetchMeals();
  }, []);

  return (
    <main>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </main>
  );
}
