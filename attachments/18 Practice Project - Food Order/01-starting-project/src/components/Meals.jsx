//http://localhost:3000/meals
import { useState, useEffect } from "react";

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
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </main>
  );
}
