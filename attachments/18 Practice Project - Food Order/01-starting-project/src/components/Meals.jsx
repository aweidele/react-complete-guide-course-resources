//http://localhost:3000/meals
import { useHttp } from "../hooks/useHttp";
import { MealItem } from "./MealItem";

const requestConfig = {};

export function Meals() {
  const { data: loadedMeals, isLoading, error } = useHttp("http://localhost:3000/meals", requestConfig, []);
  console.log(loadedMeals);

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
